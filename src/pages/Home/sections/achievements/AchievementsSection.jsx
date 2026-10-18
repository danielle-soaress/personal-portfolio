import { useCallback, useEffect, useRef, useState } from 'react';
import { m } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { BsArrowUpRight, BsChevronLeft, BsChevronRight, BsHeart, BsHeartFill } from 'react-icons/bs';
import './AchievementsSection.scss';
import data from '../../../../data/achievements.json';
import '../../../../i18n';

import doodleSparkles from '../../../../assets/images/doodles/doodle_sparkles.svg';
import doodleSquiggly from '../../../../assets/images/doodles/doodle_squiggly.svg';
import avatar from '../../../../assets/images/avatar_danielle.webp';
import unbLogo from '../../../../assets/images/companies/unb.svg';
import ifbLogo from '../../../../assets/images/companies/ifb.svg';

const LOGOS_BY_ID = {
    unb: unbLogo,
    ifb: ifbLogo,
};

const POST_IMAGES = import.meta.glob('../../../../assets/images/achievements/*.webp', {
    eager: true,
    import: 'default',
});

const getPostImage = (name) =>
    Object.entries(POST_IMAGES).find(([path]) => path.endsWith(`/${name}.webp`))?.[1];

// Little hearts that float up from the like button: offsets in px, delay in s
const HEART_PARTICLES = [
    { dx: -18, dy: -150, rot: -12, delay: 0, size: 22 },
    { dx: -64, dy: -120, rot: -24, delay: 0.05, size: 16 },
    { dx: -110, dy: -190, rot: -8, delay: 0.1, size: 20 },
    { dx: 6, dy: -230, rot: 14, delay: 0.08, size: 14 },
    { dx: -150, dy: -110, rot: -30, delay: 0.14, size: 12 },
    { dx: -40, dy: -270, rot: 6, delay: 0.16, size: 18 },
    { dx: -190, dy: -220, rot: -18, delay: 0.2, size: 14 },
    { dx: -90, dy: -300, rot: 20, delay: 0.22, size: 12 },
    { dx: 16, dy: -110, rot: 24, delay: 0.12, size: 12 },
];

const LINK_LABEL_KEYS = {
    paper: 'achievements.readPaper',
    award: 'achievements.readWork',
    press: 'achievements.watchReport',
};

function PostMedia({ slides, title, labels, onDoubleClick }) {
    const trackRef = useRef(null);
    const [index, setIndex] = useState(0);

    const goTo = (next) => {
        const track = trackRef.current;
        if (track) track.scrollTo({ left: next * track.clientWidth, behavior: 'smooth' });
    };

    const handleScroll = () => {
        const track = trackRef.current;
        if (track) setIndex(Math.round(track.scrollLeft / track.clientWidth));
    };

    const renderSlide = (slide, slideIndex) => {
        if (typeof slide === 'string') {
            return (
                <img
                    key={slide}
                    src={getPostImage(slide)}
                    alt={slideIndex === 0 ? title : ''}
                    width="800"
                    height="800"
                    loading="lazy"
                    decoding="async"
                    draggable="false"
                />
            );
        }

        const { logo, badge } = slide.tile;
        return (
            <div key={`tile-${slideIndex}`} className="post-tile">
                {logo && <img src={LOGOS_BY_ID[logo]} alt="" className="post-tile-logo" loading="lazy" decoding="async" />}
                {badge && <span className="post-tile-badge">{badge}</span>}
                <span className="post-tile-title">{title}</span>
            </div>
        );
    };

    return (
        <div className="post-media" onDoubleClick={onDoubleClick}>
            <div className="post-media-track" ref={trackRef} onScroll={handleScroll}>
                {slides.map(renderSlide)}
            </div>
            {slides.length > 1 && (
                <>
                    {index > 0 && (
                        <button type="button" className="post-media-arrow is-prev" onClick={() => goTo(index - 1)} aria-label={labels.previous}>
                            <BsChevronLeft aria-hidden="true" />
                        </button>
                    )}
                    {index < slides.length - 1 && (
                        <button type="button" className="post-media-arrow is-next" onClick={() => goTo(index + 1)} aria-label={labels.next}>
                            <BsChevronRight aria-hidden="true" />
                        </button>
                    )}
                    <div className="post-media-dots" aria-hidden="true">
                        {slides.map((_, dotIndex) => (
                            <span key={dotIndex} className={dotIndex === index ? 'is-active' : ''} />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}

function Post({ post, content, typeLabel, linkLabel, labels }) {
    const [liked, setLiked] = useState(false);
    const [expanded, setExpanded] = useState(false);
    const [isClamped, setIsClamped] = useState(false);
    const captionRef = useRef(null);

    // Only offer "mais" when the two-line clamp actually hides text
    useEffect(() => {
        const caption = captionRef.current;
        if (!caption) return undefined;
        const check = () => setIsClamped(caption.scrollHeight > caption.clientHeight + 1);
        check();
        const observer = new ResizeObserver(check);
        observer.observe(caption);
        return () => observer.disconnect();
    }, []);
    const [bursts, setBursts] = useState([]);
    const [popKey, setPopKey] = useState(0);

    const burst = () => {
        const id = Date.now();
        setBursts((current) => [...current, id]);
        setTimeout(() => setBursts((current) => current.filter((item) => item !== id)), 1400);
    };

    const toggleLike = () => {
        if (!liked) burst();
        setLiked((value) => !value);
    };

    const likeFromPhoto = () => {
        setPopKey((key) => key + 1);
        if (!liked) {
            burst();
            setLiked(true);
        }
    };

    return (
        <article className="post">
            <div className="post-header">
                <img className="post-avatar" src={avatar} alt="" width="36" height="36" loading="lazy" decoding="async" />
                <div className="post-author">
                    <span className="post-name">Danielle Soares</span>
                    <span className="post-venue">{content.venue}</span>
                </div>
            </div>

            <div className="post-media-wrap">
                <PostMedia
                    slides={post.slides}
                    title={content.title}
                    labels={labels}
                    onDoubleClick={likeFromPhoto}
                />
                {popKey > 0 && (
                    <span key={popKey} className="post-pop-heart" aria-hidden="true">
                        <BsHeartFill />
                    </span>
                )}
            </div>

            <div className="post-actions">
                <span className="post-meta">
                    {typeLabel}
                    {post.year && <> · <time>{post.year}</time></>}
                </span>
                <button
                    type="button"
                    className={`post-like ${liked ? 'is-liked' : ''}`}
                    onClick={toggleLike}
                    aria-pressed={liked}
                    aria-label={liked ? labels.unlike : labels.like}
                >
                    {liked ? <BsHeartFill aria-hidden="true" /> : <BsHeart aria-hidden="true" />}
                </button>
                {bursts.map((id) => (
                    <span key={id} className="heart-burst" aria-hidden="true">
                        {HEART_PARTICLES.map((particle, particleIndex) => (
                            <BsHeartFill
                                key={particleIndex}
                                className="heart-particle"
                                style={{
                                    '--dx': `${particle.dx}px`,
                                    '--dy': `${particle.dy}px`,
                                    '--rot': `${particle.rot}deg`,
                                    '--delay': `${particle.delay}s`,
                                    '--size': `${particle.size}px`,
                                }}
                            />
                        ))}
                    </span>
                ))}
            </div>

            <div className="post-text">
                <h4 className="post-title">{content.title}</h4>
                <p ref={captionRef} className={`post-caption ${expanded ? '' : 'is-collapsed'}`}>{content.caption}</p>
                {(isClamped || expanded) && (
                    <button type="button" className="post-more" onClick={() => setExpanded((value) => !value)} aria-expanded={expanded}>
                        {expanded ? labels.less : labels.more}
                    </button>
                )}
                {post.url && (
                    <a className="post-link" href={post.url} target="_blank" rel="noopener noreferrer">
                        {linkLabel}
                        <BsArrowUpRight aria-hidden="true" />
                    </a>
                )}
            </div>
        </article>
    );
}

function AchievementsSection() {
    const { t, i18n } = useTranslation();
    const currentLang = (i18n.language || 'pt').split('-')[0];
    const trackRef = useRef(null);
    const frameRef = useRef(0);
    const dragRef = useRef(null);
    const suppressClickRef = useRef(false);
    const [active, setActive] = useState(0);
    const posts = data.posts;

    const labels = {
        previous: t('achievements.previous'),
        next: t('achievements.next'),
        like: t('achievements.like'),
        unlike: t('achievements.unlike'),
        more: t('achievements.more'),
        less: t('achievements.less'),
    };

    const getStep = useCallback(() => {
        const track = trackRef.current;
        const slide = track?.querySelector('.feed-slide');
        if (!slide) return 1;
        return slide.offsetWidth + (parseFloat(getComputedStyle(track).columnGap) || 0);
    }, []);

    const goTo = useCallback((index) => {
        const track = trackRef.current;
        const clamped = Math.min(Math.max(index, 0), posts.length - 1);
        if (track) track.scrollTo({ left: clamped * getStep(), behavior: 'smooth' });
    }, [getStep, posts.length]);

    // Scroll-linked focus: each slide scales and fades by its distance from the center, frame by frame
    const paintSlides = useCallback(() => {
        const track = trackRef.current;
        if (!track) return;
        const step = getStep();
        const center = track.scrollLeft + track.clientWidth / 2;
        Array.from(track.children).forEach((slide) => {
            const offset = (slide.offsetLeft + slide.offsetWidth / 2 - center) / step;
            slide.style.setProperty('--distance', Math.min(Math.abs(offset), 1).toFixed(3));
        });
        setActive(Math.round(track.scrollLeft / step));
    }, [getStep]);

    const handleScroll = () => {
        cancelAnimationFrame(frameRef.current);
        frameRef.current = requestAnimationFrame(paintSlides);
    };

    useEffect(() => {
        paintSlides();
        window.addEventListener('resize', paintSlides);
        return () => {
            window.removeEventListener('resize', paintSlides);
            cancelAnimationFrame(frameRef.current);
        };
    }, [paintSlides]);

    // Mouse drag to swipe between posts (touch already scrolls natively)
    const handlePointerDown = (event) => {
        if (event.pointerType !== 'mouse' || event.button !== 0) return;
        if (event.target.closest('button, a')) return;
        const track = trackRef.current;
        dragRef.current = {
            pointerId: event.pointerId,
            startX: event.clientX,
            startLeft: track.scrollLeft,
            startTime: performance.now(),
            moved: false,
        };
    };

    const handlePointerMove = (event) => {
        const drag = dragRef.current;
        const track = trackRef.current;
        if (!drag || !track) return;
        const deltaX = event.clientX - drag.startX;
        if (!drag.moved) {
            if (Math.abs(deltaX) < 6) return;
            drag.moved = true;
            track.setPointerCapture(drag.pointerId);
            track.classList.add('is-dragging');
        }
        track.scrollLeft = drag.startLeft - deltaX;
    };

    const endDrag = (event) => {
        const drag = dragRef.current;
        const track = trackRef.current;
        dragRef.current = null;
        if (!drag || !drag.moved || !track) return;

        track.classList.remove('is-dragging');
        if (track.hasPointerCapture(drag.pointerId)) track.releasePointerCapture(drag.pointerId);

        const step = getStep();
        const deltaX = event.clientX - drag.startX;
        const velocity = deltaX / Math.max(performance.now() - drag.startTime, 1);
        const startIndex = Math.round(drag.startLeft / step);
        let target = Math.round(track.scrollLeft / step);
        // A short flick or a drag past 15% of a card is enough to move one post
        if (target === startIndex && (Math.abs(deltaX) > step * 0.15 || Math.abs(velocity) > 0.4)) {
            target = startIndex + (deltaX < 0 ? 1 : -1);
        }
        goTo(target);

        suppressClickRef.current = true;
        setTimeout(() => { suppressClickRef.current = false; }, 50);
    };

    const handleClickCapture = (event) => {
        if (!suppressClickRef.current) return;
        event.preventDefault();
        event.stopPropagation();
        suppressClickRef.current = false;
    };

    const handleKeyDown = (event) => {
        if (event.key === 'ArrowRight') {
            event.preventDefault();
            goTo(active + 1);
        } else if (event.key === 'ArrowLeft') {
            event.preventDefault();
            goTo(active - 1);
        }
    };

    return (
        <section className="achievements-section" id="achievements">
            <m.div
                className="achievements-header"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
            >
                <h2>
                    <span className="title-text">{t('achievements.title')}</span>
                    <span className="header-sparkle-doodle" aria-hidden="true">
                        <img src={doodleSparkles} alt="" width="24" height="24" loading="lazy" decoding="async" />
                    </span>
                </h2>
                <div>
                    <h3>{t('achievements.subtitle')}</h3>
                    <span className="header-squiggly-doodle" aria-hidden="true">
                        <img src={doodleSquiggly} alt="" width="130" height="16" loading="lazy" decoding="async" />
                    </span>
                </div>
            </m.div>

            <div className="feed-nav">
                <button type="button" className="feed-arrow" onClick={() => goTo(active - 1)} disabled={active === 0} aria-label={labels.previous}>
                    <BsChevronLeft aria-hidden="true" />
                </button>
                <div className="stories" role="group">
                    {posts.map((post, index) => (
                        <button
                            key={post.id}
                            type="button"
                            className={`story-bar ${index < active ? 'is-seen' : ''} ${index === active ? 'is-active' : ''}`}
                            onClick={() => goTo(index)}
                            aria-label={t('achievements.goTo', { index: index + 1 })}
                            aria-current={index === active}
                        />
                    ))}
                </div>
                <button type="button" className="feed-arrow" onClick={() => goTo(active + 1)} disabled={active === posts.length - 1} aria-label={labels.next}>
                    <BsChevronRight aria-hidden="true" />
                </button>
            </div>

            <m.div
                className="feed-stage"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
                <ul
                    className="feed-track"
                    ref={trackRef}
                    onScroll={handleScroll}
                    onKeyDown={handleKeyDown}
                    onPointerDown={handlePointerDown}
                    onPointerMove={handlePointerMove}
                    onPointerUp={endDrag}
                    onPointerCancel={endDrag}
                    onClickCapture={handleClickCapture}
                    tabIndex={0}
                >
                    {posts.map((post, index) => {
                        const content = post[currentLang] || post.en;
                        return (
                            <li
                                key={post.id}
                                className={`feed-slide ${index === active ? 'is-active' : ''}`}
                                onClickCapture={(event) => {
                                    if (index === active) return;
                                    event.preventDefault();
                                    event.stopPropagation();
                                    goTo(index);
                                }}
                            >
                                <Post
                                    post={post}
                                    content={content}
                                    typeLabel={t(`achievements.types.${post.type}`)}
                                    linkLabel={t(LINK_LABEL_KEYS[post.type] || 'achievements.readPaper')}
                                    labels={labels}
                                />
                            </li>
                        );
                    })}
                </ul>
            </m.div>
        </section>
    );
}

export default AchievementsSection;

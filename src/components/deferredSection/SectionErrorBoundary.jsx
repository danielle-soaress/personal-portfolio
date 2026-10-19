import { Component } from 'react';

// Contains a failure inside one lazily loaded section so the rest of the page keeps working
class SectionErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error) {
        console.error(`Section "${this.props.sectionId}" failed to load`, error);
    }

    render() {
        return this.state.hasError ? this.props.fallback : this.props.children;
    }
}

export default SectionErrorBoundary;

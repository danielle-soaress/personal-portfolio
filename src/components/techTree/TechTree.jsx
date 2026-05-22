import './TechTree.scss';
import { motion} from "motion/react"


function TechTree ({ data }) {
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{opacity: 1}}
    viewport={{ once: true }}
    transition={{ duration: 1, ease: "easeIn" }}
    className="tree_wrapper">
      <h3 className="tree_trunk">
        {data.trunk}
      </h3>
      <div className="tree_branches">
        {data.branches.map((branch, i) => (
          <div key={i} className="branch_item">
            <div className="box branch_box">
              {branch.img && (
                <img src={branch.img} alt={branch.name} />
              )}
              <span>{branch.name}</span>

            </div>
              <div className="progress_bar">
                  <motion.div
                  initial={{ width: 0 }} 
                  whileInView={{ width: `${branch.level * 10}%`}}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "linear" }}
                  className="progress_fill"
                  />
              </div>
            
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default TechTree;
import React from 'react';
import { Tree, TreeNode } from 'react-organizational-chart';

const ReactComponentHierarchy = () => (
<Tree label={<div>App</div>}>
<TreeNode label={<div>Navigation</div>} />
  <TreeNode label={<div>Routes</div>}>
    <TreeNode label={<div>Homepage</div>} />

    <TreeNode label={<div>Login</div>} >
    <TreeNode label={<div>LoginForm</div>}/>


    <TreeNode label={<div>Profile</div>} >
    <TreeNode label={<div>ProfileForm</div>}/>
    </TreeNode>
        </TreeNode>

    <TreeNode label={<div>Signup</div>} >
    <TreeNode label={<div>SignupForm</div>}/>
    </TreeNode>
    
    <TreeNode label={<div>Companies</div>} >
    <TreeNode label={<div>CompanyList</div>} >
    <TreeNode label={<div>CompanyCard</div>} >
    <TreeNode label={<div>CompanyDetail</div>} />
      <TreeNode label={<div>JobCardList</div>}/>
    </TreeNode>
    </TreeNode>
    </TreeNode>
  
    <TreeNode label={<div>Jobs</div>} >
    <TreeNode label={<div>JobList</div>} >
    <TreeNode label={<div>JobCardList</div>} >
    <TreeNode label={<div>JobCard</div>} >
    <TreeNode label={<div>JobDetails</div>} />
  </TreeNode>
  </TreeNode> 
  </TreeNode>
  </TreeNode>
  </TreeNode>

</Tree>
);

export default ReactComponentHierarchy;
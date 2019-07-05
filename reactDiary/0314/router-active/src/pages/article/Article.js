import React from 'react';

import './style.css';

//只渲染视图，不涉及逻辑交互，用函数组件比较好
const Article = (props) => {
  const { match,location } = props;

  return (
    <div className="article">
      <div>
        文章ID：
        <span>{match.params.id}</span>
      </div>
      <div>
        文章作者：
        <span>{location.state.author}</span>
      </div>
      <div>
        文章标题：
        <span>{location.state.title}</span>
      </div>
    </div>
  )
}


// class Article extends Component {

//   render () {
//     const {match,location} = this.props;
//     return (
//       <div className="article">
//         <div>
//           文章ID：
//           <span>{match.params.id}</span>
//         </div>
//         <div>
//           文章作者：
//           <span>{location.state.author}</span>
//         </div>
//         <div>
//           文章标题：
//           <span>{location.state.title}</span>
//         </div>
//       </div>
//     )
//   }

// }

export default Article;
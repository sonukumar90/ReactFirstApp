import { FATCH_POSTS, NEW_POSTS,SINGLE_POSTS } from "../action/type";

export function fetchPosts() {
  return function(dispatchs) {
    fetch("http://localhost:5000/api/values")
      .then(res => res.json())
      .then(posts =>
        dispatchs({
          type: FATCH_POSTS,
          payload: posts
        })
      );
  };
}

export const createPost = postData => dispatchs => {
  fetch("http://localhost:5000/api/values", {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(postData)
  })
    
    .then(post =>
      this.navigate('/AddNew')
    );
};

export function singleFetchPosts(a) {
  console.log("singleFetchPosts"+a);
  return function(dispatchs) {
    fetch("http://localhost:5000/api/values/"+a)
      .then(res => res.json())
      .then(posts => 
        dispatchs({
          type: SINGLE_POSTS,
          singleResponse: posts
        })
      );
  };
}

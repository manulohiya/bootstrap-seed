$(function() {

  // constructor function - Blogger
  function Blogger(name) {
    this.name = name;
  }

   // constructor functions - Post
  function Post(content) {
    this.content = content;
  }

  // `Posts.all` contains our seed data
  Post.all = [
    new Post('Life is beautiful and so are you')

  ];
 console.log("Post: "+Post.all)	

  Post.prototype.save = function() {
    // store our new post
    Post.all.push(this);
    
  };

  // var post = new Post("This is freakin awesome");
  // post.save(post);
   console.log("Post: "+Post.all)


  Post.prototype.render = function() {
    // append our new post to the page
    var $post = $(postTemplate(this));
    this.index = Post.all.indexOf(this);
    // $post.attr('data-index', this.index);
    $postList.append($post);
  };
   console.log("postList:"+$postList)

  // form to create new todo
  var $newPost = $('#new-message');
  console.log("newPost: "+$newPost)

  // element to hold our list of todos
  var $postList = $('#post-list');
	console.log("$postlist: "+$postList)
 
  var postTemplate = _.template($('#template-post').html());
  console.log("postTemplate: "+postTemplate)
  // append existing post (from seed data) to `$postList`
  // `_.each` is an "iterator" function provided by Underscore.js
  _.each(Post.all, function (post, index) {
    post.render();
  });
  console.log("Post: "+Post.all)

  // submit form to create new post
  $newPost.on('submit', function(event) {
    event.preventDefault();

    // create new post object from form data
    
    var postContent = $('#new-message-text').val();
    var post = new Post(postContent);
    console.log(Post.all)
    // save toDo
    post.save();

    // render toDo
    post.render();

    // reset the form
    $newPost[0].reset();
    $('#new-message-text').focus();
  });

$("#new-message-text").on('input propertychange paste', function() {
    var length = $("#new-message-text").val().length;
    var remaining = $("#new-message-text").attr("maxlength") - length;
    $("#characters_remaining").html(remaining)
});

});

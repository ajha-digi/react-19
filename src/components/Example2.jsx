import React from "react";

function Example2() {
  const formAction = async (formData) => {
    const newPost = {
      title: formData.get("title"),
      body: formData.get("body"),
    };

    console.log(newPost);
  };

  return (
    <form action={formAction}>
      <div className="mb-4">
        <label htmlFor="title">Title</label>
        <input id="title" type="text" placeholder="Enter title" name="title" />
      </div>
      <div>
        <label htmlFor="body">Body</label>
        <textarea
          id="body"
          rows="5"
          placeholder="Enter body"
          name="body"
        ></textarea>
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default Example2;

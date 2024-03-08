import { useFormStatus } from 'react-dom';

function Example3() {
  const { pending } = useFormStatus();
  console.log(pending);
  const formAction = async (formData) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
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
        <SubmitButton />
      </div>
    </form>
  );
}


// SubmitButton component
const SubmitButton = () => {
  const { pending } = useFormStatus();
  console.log(pending);

  return (
    <button
    type='submit'
      disabled={pending}
    >
      {pending ? 'Submitting...' : 'Submit'}
    </button>
  );
};

export default Example3;

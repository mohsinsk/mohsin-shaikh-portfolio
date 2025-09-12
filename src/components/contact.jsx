export default function Contact() {
  return (
    <section
      className="grid grid-cols-1 md:grid-cols-2 items-center justify-center px-6 pb-12"
      id="contact"
    >
      <div className="mx-auto max-w-2xl">
        <h1 className="text-4xl text-center font-semibold tracking-tight text-balance dark:text-white text-indigo-400 sm:text-5xl">
          Let's Contact
        </h1>
        <p className="mt-2 text-lg/8 text-gray-500 sm:text-center">
          I’m always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision. Feel free to reach out and
          let’s build something amazing together.
        </p>
      </div>
      <form
        action="#"
        method="POST"
        className="max-w-xl sm:mx-auto mt-8 sm:mt-20"
      >
        <div className="grid grid-cols-1 place-content-start sm:grid-cols-2 gap-x-8 gap-y-6">
          <div>
            <Input
              label={"First Name"}
              type={"text"}
              id={"first-name"}
              placeholder={"Your Name"}
            />
          </div>

          <div>
            <Input
              label={"Last Name"}
              type={"text"}
              id={"last-name"}
              placeholder={"Your Name"}
            />
          </div>

          <div className="sm:col-span-2">
            <Input
              label={"Email"}
              type={"email"}
              id={"email"}
              placeholder={"Your Email"}
            />
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm/6 font-semibold text-white"
            >
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Message"
                className="block w-full rounded-md bg-gray-50 dark:bg-white/5 px-3.5 py-2 text-base text-gray-700 dark:text-white outline-1 -outline-offset-1 outline-black/20 dark:outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
                defaultValue={""}
              />
            </div>
          </div>
        </div>
        <button
          className="bg-indigo-500 text-white p-1.5 rounded mt-5 max-w-xs w-xs mx-auto block sm:mx-0 sm:max-w-20"
          type="submit"
          onClick={(e) => e.preventDefault()}
        >
          Submit
        </button>
      </form>
    </section>
  );
}

const Input = ({ label, type, id, placeholder }) => {
  return (
    <>
      <label
        htmlFor="last-name"
        className="block text-sm/6 font-semibold dark:text-white"
      >
        {label}
      </label>
      <div className="mt-2.5">
        <input
          id={id}
          name={id}
          type={type}
          autoComplete="family-name"
          placeholder={placeholder}
          className="block w-full rounded-md bg-gray-50 dark:bg-white/5 px-3.5 py-2 text-base text-gray-700 dark:text-white outline-1 -outline-offset-1 outline-black/20 dark:outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
        />
      </div>
    </>
  );
};

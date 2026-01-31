const Contact = () => {
  return (
    <section className="py-16 bg-gray-50" id="contact">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Contact</h2>

        <p className="text-gray-600 mb-8">
          I’m open to Frontend / React Developer opportunities.
          Feel free to reach out.
        </p>

        <div className="flex flex-col items-center gap-4">
          <a
            href="mailto:supreethakharvi99@gmail.com"
            className="text-lg text-blue-600 hover:underline"
          >
            supreethakharvi99@gmail.com
          </a>

          <div className="flex gap-6">
            <a
              href="https://github.com/Supreethakharvi99"
              target="_blank"
              className="hover:underline"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com"
              target="_blank"
              className="hover:underline"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      <footer className="text-center py-6 text-sm text-gray-500">
  © {new Date().getFullYear()} Supreetha Kharvi. All rights reserved.
</footer>

    </section>
    
  );
};

export default Contact;

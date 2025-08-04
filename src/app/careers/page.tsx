
export default function Careers() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4 text-center">Join Our Team</h1>
      <p className="text-center text-gray-600 mb-10">
        We're always looking for passionate and talented individuals to help shape the future of design, construction, and technology.
      </p>
      <div className="space-y-8">
        <div className="border rounded p-6 shadow hover:shadow-md transition">
          <h2 className="text-2xl font-semibold mb-2">Architectural Designer</h2>
          <p className="text-gray-600 mb-4">We're looking for creative architects with experience in modern sustainable design and planning.</p>
          <a href="mailto:careers@companyname.com?subject=Application: Architectural Designer" className="text-purple-600 font-medium hover:underline">
            Apply Now
          </a>
        </div>
        <div className="border rounded p-6 shadow hover:shadow-md transition">
          <h2 className="text-2xl font-semibold mb-2">Software Developer</h2>
          <p className="text-gray-600 mb-4">Join our software team to build tools that power modern construction and business solutions.</p>
          <a href="mailto:careers@companyname.com?subject=Application: Software Developer" className="text-purple-600 font-medium hover:underline">
            Apply Now
          </a>
        </div>
        <div className="border rounded p-6 shadow hover:shadow-md transition">
          <h2 className="text-2xl font-semibold mb-2">Project Manager</h2>
          <p className="text-gray-600 mb-4">Experienced in handling large-scale projects? We'd love to have you on board.</p>
          <a href="mailto:careers@companyname.com?subject=Application: Project Manager" className="text-purple-600 font-medium hover:underline">
            Apply Now
          </a>
        </div>
      </div>
    </div>
  );
}

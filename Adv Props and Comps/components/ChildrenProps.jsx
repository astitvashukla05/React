function Card({ children, title, color = "blue" }) {
  const colorClasses = {
    blue: "border-blue-500 bg-blue-50",
    green: "border-green-500 bg-green-50",
    purple: "border-purple-500 bg-purple-50",
    red: "border-red-500 bg-red-50",
  };

  return (
    <div
      className={`border-l-4 ${colorClasses[color]} p-6 rounded-xl shadow-md hover:shadow-lg transition`}
    >
      {title && (
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          {title}
        </h3>
      )}

      <div className="text-gray-700 space-y-2 text-sm">
        {children}
      </div>
    </div>
  );
}

function Container({ children, layout = "grid" }) {
  const layoutClasses = {
    vertical: "flex flex-col space-y-6",
    horizontal: "flex flex-row flex-wrap gap-6",
    grid: "grid grid-cols-1 md:grid-cols-2 gap-6",
  };

  return <div className={layoutClasses[layout]}>{children}</div>;
}

function ChildrenProps() {
  return (
    <section className="p-10 bg-white rounded-2xl shadow-xl space-y-8">
      
      {/* Header */}
      <header className="space-y-2">
        <h2 className="text-3xl font-bold text-gray-900">
          Children Props
        </h2>
        <p className="text-gray-600 max-w-3xl">
          The <code className="bg-gray-100 px-1 rounded">children</code> prop allows
          you to pass JSX elements or components inside other components, enabling
          flexible component composition.
        </p>
      </header>

      {/* Cards */}
      <Container>
        
        {/* User Profile */}
        <Card title="User Profile" color="blue">
          <p><strong>Name:</strong> John Doe</p>
          <p><strong>Email:</strong> john@example.com</p>
          <p><strong>Role:</strong> Developer</p>
        </Card>

        {/* Statistics */}
        <Card title="Statistics" color="green">
          <div className="flex justify-between">
            <span>Total Users:</span>
            <strong>1,234</strong>
          </div>
          <div className="flex justify-between">
            <span>Active Sessions:</span>
            <strong>567</strong>
          </div>
          <div className="flex justify-between">
            <span>Revenue:</span>
            <strong>$89,000</strong>
          </div>
        </Card>

        {/* Quick Actions */}
        <Card title="Quick Actions" color="purple">
          <button className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition">
            Create New
          </button>
          <button className="w-full bg-gray-700 text-white py-2 rounded-lg hover:bg-gray-800 transition">
            View All
          </button>
        </Card>

        {/* Warning */}
        <Card title="Warning" color="red">
          <p>
            Your trial period ends in <strong>5 days</strong>. Please upgrade your
            account to continue using all features.
          </p>
        </Card>

      </Container>
    </section>
  );
}

export default ChildrenProps;

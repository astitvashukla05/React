import BasicProps from "../components/BasicProps";
import ChildrenProps from "../components/ChildrenProps";
import ComplexProps from "../components/ComplexProps";
import RefProps from "../components/RefProps";
import ThemeToggler,{ThemeProvider,useTheme} from "../components/ThemeToggler";

function Navigation() {
  const sections = [
    { id: "basic", label: "Basic Props", icon: "📦" },
    { id: "ref", label: "Ref Props", icon: "🔗" },
    { id: "children", label: "Children Props", icon: "👶" },
    { id: "complex", label: "Complex Props", icon: "🧩" },
    { id: "theme", label: "Theme Props", icon: "🎨" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex flex-wrap gap-3 justify-center md:justify-start">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="
                flex items-center gap-2
                px-4 py-2
                rounded-lg
                bg-amber-600 text-white
                font-medium
                hover:bg-amber-500
                hover:scale-105
                transition-all duration-200
                shadow-md
              "
            >
              <span>{section.icon}</span>
              <span>{section.label}</span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

function AppContent() {
  const {isDark}=useTheme()
  return (
    <div className="min-h-screen bg-gray-800 text-white">
      <Navigation />

      {/* Header */}
      <header className="max-w-7xl mx-auto px-6 py-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          React Props Explained
        </h1>
        <p className="mt-4 text-gray-300 text-lg">
          A simple and practical guide to understand React props clearly
        </p>
      </header>

      {/* Content Sections */}
      <main className="max-w-7xl mx-auto px-6 space-y-20 pb-20">
        <section id="basic" className="scroll-mt-28">
          <BasicProps />
        </section>

        <section id="ref" className="scroll-mt-28">
          <RefProps />
        </section>

        <section id="children" className="scroll-mt-28">
          <ChildrenProps />
        </section>

        <section id="complex" className="scroll-mt-28">
          <ComplexProps />
        </section>

        <section id="theme" className="scroll-mt-28">
          <ThemeToggler />
        </section>
      </main>
    </div>
  );
}

function App() {
  return <ThemeProvider><AppContent/></ThemeProvider>;
}

export default App;

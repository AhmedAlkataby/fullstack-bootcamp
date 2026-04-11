import React, { useState, useEffect } from 'react';
import { Menu, X, Clock, Code, ChevronRight, CheckCircle2, Play, ArrowLeft, LayoutTemplate, Lock, Sparkles } from 'lucide-react';

// --- REUSABLE COMPONENTS ---

const CodeBlock = ({ code }) => (
  <div className="my-4 bg-[#121212] rounded-lg overflow-hidden shadow-lg border border-gray-700">
    <div className="flex items-center px-4 py-2 bg-[#1e1e1e] border-b border-gray-700">
      <div className="flex space-x-2">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
      </div>
      <span className="ml-4 text-xs text-gray-400 font-mono">example.html</span>
    </div>
    <div className="p-4 overflow-x-auto">
      <pre className="text-sm font-mono text-gray-300">
        <code>{code}</code>
      </pre>
    </div>
  </div>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="mt-12 py-8 border-t border-slate-800/60 text-center">
      <p className="text-slate-500 text-sm font-medium">
        &copy; {currentYear} Ahmed Al-Kataby. All rights reserved.
      </p>
    </footer>
  );
};

// --- COURSE DATA ---

const courseSections = [
  {
    id: 'intro',
    title: '1. Introduction to HTML',
    time: '5 mins',
    content: (
      <div className="space-y-4">
        <h2 className="text-3xl font-bold text-gray-100">HTML Introduction</h2>
        <p className="text-gray-300 text-lg">HTML stands for Hyper Text Markup Language. It is the standard markup language for creating Web pages. It describes the structure of a Web page and consists of a series of elements.</p>
        
        <h3 className="text-xl font-semibold text-gray-200 mt-6">A Simple HTML Document</h3>
        <CodeBlock code={`<!DOCTYPE html>
<html>
<head>
  <title>Page Title</title>
</head>
<body>

  <h1>My First Heading</h1>
  <p>My first paragraph.</p>

</body>
</html>`} />
        
        <div className="bg-blue-900/30 border-l-4 border-blue-500 p-4 mt-6 rounded-r-md">
          <h4 className="font-bold text-blue-300">Code Explained:</h4>
          <ul className="list-disc ml-5 mt-2 space-y-1 text-blue-200 text-sm">
            <li><code className="text-gray-300 bg-gray-800 px-1 py-0.5 rounded">&lt;!DOCTYPE html&gt;</code> declares this is an HTML5 document.</li>
            <li><code className="text-gray-300 bg-gray-800 px-1 py-0.5 rounded">&lt;html&gt;</code> is the root element of an HTML page.</li>
            <li><code className="text-gray-300 bg-gray-800 px-1 py-0.5 rounded">&lt;head&gt;</code> contains meta information about the page (like title).</li>
            <li><code className="text-gray-300 bg-gray-800 px-1 py-0.5 rounded">&lt;body&gt;</code> defines the document's body, which is a container for all visible contents.</li>
          </ul>
        </div>
      </div>
    )
  },
  {
    id: 'elements',
    title: '2. HTML Elements & Basics',
    time: '10 mins',
    content: (
      <div className="space-y-4">
        <h2 className="text-3xl font-bold text-gray-100">Elements & Attributes</h2>
        <p className="text-gray-300 text-lg">An HTML element is defined by a start tag, some content, and an end tag.</p>
        
        <CodeBlock code={`<tagname>Content goes here...</tagname>`} />
        
        <h3 className="text-xl font-semibold text-gray-200 mt-6">Headings & Paragraphs</h3>
        <p className="text-gray-300">HTML headings are defined with the <code className="text-gray-300 bg-gray-800 px-1 py-0.5 rounded">&lt;h1&gt;</code> to <code className="text-gray-300 bg-gray-800 px-1 py-0.5 rounded">&lt;h6&gt;</code> tags. <code className="text-gray-300 bg-gray-800 px-1 py-0.5 rounded">&lt;h1&gt;</code> defines the most important heading. Paragraphs use <code className="text-gray-300 bg-gray-800 px-1 py-0.5 rounded">&lt;p&gt;</code>.</p>
        
        <CodeBlock code={`<h1>This is heading 1</h1>
<h2>This is heading 2</h2>
<h3>This is heading 3</h3>

<p>This is a paragraph.</p>
<p>This is another paragraph.</p>`} />

        <h3 className="text-xl font-semibold text-gray-200 mt-6">Attributes</h3>
        <p className="text-gray-300">Attributes provide additional information about elements. They are always specified in the start tag and usually come in name/value pairs like: <code className="text-gray-300 bg-gray-800 px-1 py-0.5 rounded">name="value"</code>.</p>
        <CodeBlock code={`<!-- The href attribute specifies the URL of the page the link goes to -->
<a href="https://www.w3schools.com">Visit W3Schools</a>`} />
      </div>
    )
  },
  {
    id: 'formatting',
    title: '3. Text Formatting & Links',
    time: '5 mins',
    content: (
      <div className="space-y-4">
        <h2 className="text-3xl font-bold text-gray-100">Text Formatting</h2>
        <p className="text-gray-300 text-lg">HTML contains several elements for defining text with a special meaning.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
          <ul className="list-disc ml-5 space-y-2 text-gray-300">
            <li><code className="text-gray-300 bg-gray-800 px-1 py-0.5 rounded">&lt;b&gt;</code> - Bold text</li>
            <li><code className="text-gray-300 bg-gray-800 px-1 py-0.5 rounded">&lt;strong&gt;</code> - Important text</li>
            <li><code className="text-gray-300 bg-gray-800 px-1 py-0.5 rounded">&lt;i&gt;</code> - Italic text</li>
            <li><code className="text-gray-300 bg-gray-800 px-1 py-0.5 rounded">&lt;em&gt;</code> - Emphasized text</li>
          </ul>
          <ul className="list-disc ml-5 space-y-2 text-gray-300">
            <li><code className="text-gray-300 bg-gray-800 px-1 py-0.5 rounded">&lt;mark&gt;</code> - Marked text</li>
            <li><code className="text-gray-300 bg-gray-800 px-1 py-0.5 rounded">&lt;small&gt;</code> - Smaller text</li>
            <li><code className="text-gray-300 bg-gray-800 px-1 py-0.5 rounded">&lt;del&gt;</code> - Deleted text</li>
            <li><code className="text-gray-300 bg-gray-800 px-1 py-0.5 rounded">&lt;ins&gt;</code> - Inserted text</li>
          </ul>
        </div>

        <CodeBlock code={`<p>This text is normal.</p>
<p><b>This text is bold.</b></p>
<p><i>This text is italic.</i></p>
<p>H<sub>2</sub>O is scientific for water.</p>`} />

        <h3 className="text-xl font-semibold text-gray-200 mt-6">HTML Links</h3>
        <p className="text-gray-300">Links are found in nearly all web pages. You can click on a link and jump to another document.</p>
        <CodeBlock code={`<a href="url" target="_blank">Link text</a>`} />
        <p className="text-sm text-gray-400 mt-2">The <code className="text-gray-300 bg-gray-800 px-1 py-0.5 rounded">target="_blank"</code> attribute opens the linked document in a new window or tab.</p>
      </div>
    )
  },
  {
    id: 'images',
    title: '4. Images & Media',
    time: '5 mins',
    content: (
      <div className="space-y-4">
        <h2 className="text-3xl font-bold text-gray-100">HTML Images</h2>
        <p className="text-gray-300 text-lg">Images can improve the design and the appearance of a web page. In HTML, images are defined with the <code className="text-gray-300 bg-gray-800 px-1 py-0.5 rounded">&lt;img&gt;</code> tag.</p>
        
        <div className="bg-yellow-900/30 border-l-4 border-yellow-500 p-4 mt-6 rounded-r-md">
          <p className="text-yellow-300"><strong>Note:</strong> The <code className="text-gray-300 bg-gray-800 px-1 py-0.5 rounded">&lt;img&gt;</code> tag is empty, it contains attributes only, and does not have a closing tag.</p>
        </div>

        <CodeBlock code={`<img src="pic_trulli.jpg" alt="Italian Trulli" width="500" height="333">`} />

        <h3 className="text-xl font-semibold text-gray-200 mt-6">Essential Attributes</h3>
        <ul className="list-disc ml-5 mt-2 space-y-2 text-gray-300">
          <li><strong>src</strong> - Specifies the path to the image.</li>
          <li><strong>alt</strong> - Provides an alternate text for an image, if the user for some reason cannot view it (because of slow connection, an error in the src attribute, or if the user uses a screen reader).</li>
          <li><strong>width</strong> & <strong>height</strong> - Provide size hints to the browser to prevent layout shifts.</li>
        </ul>
      </div>
    )
  },
  {
    id: 'lists_tables',
    title: '5. Lists & Tables',
    time: '10 mins',
    content: (
      <div className="space-y-4">
        <h2 className="text-3xl font-bold text-gray-100">Lists & Tables</h2>
        
        <h3 className="text-xl font-semibold text-gray-200 mt-6">HTML Lists</h3>
        <p className="text-gray-300">HTML lists allow web developers to group a set of related items in lists. There are Unordered (bulleted) and Ordered (numbered) lists.</p>
        
        <CodeBlock code={`<!-- Unordered List -->
<ul>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>

<!-- Ordered List -->
<ol>
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ol>`} />

        <h3 className="text-xl font-semibold text-gray-200 mt-8">HTML Tables</h3>
        <p className="text-gray-300">HTML tables allow web developers to arrange data into rows and columns.</p>
        <CodeBlock code={`<table>
  <tr>
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
  </tr>
</table>`} />
        <ul className="list-disc ml-5 mt-2 space-y-1 text-gray-300 text-sm">
          <li><code className="text-gray-300 bg-gray-800 px-1 py-0.5 rounded">&lt;table&gt;</code> defines the table</li>
          <li><code className="text-gray-300 bg-gray-800 px-1 py-0.5 rounded">&lt;tr&gt;</code> defines a table row</li>
          <li><code className="text-gray-300 bg-gray-800 px-1 py-0.5 rounded">&lt;th&gt;</code> defines a table header (centered and bold by default)</li>
          <li><code className="text-gray-300 bg-gray-800 px-1 py-0.5 rounded">&lt;td&gt;</code> defines standard table data</li>
        </ul>
      </div>
    )
  },
  {
    id: 'semantics',
    title: '6. Semantic HTML & Layout',
    time: '5 mins',
    content: (
      <div className="space-y-4">
        <h2 className="text-3xl font-bold text-gray-100">Semantic HTML</h2>
        <p className="text-gray-300 text-lg">Semantic elements = elements with a meaning.</p>
        <p className="text-gray-300">A semantic element clearly describes its meaning to both the browser and the developer. Examples of non-semantic elements: <code className="text-gray-300 bg-gray-800 px-1 py-0.5 rounded">&lt;div&gt;</code> and <code className="text-gray-300 bg-gray-800 px-1 py-0.5 rounded">&lt;span&gt;</code> - Tells nothing about its content. Examples of semantic elements: <code className="text-gray-300 bg-gray-800 px-1 py-0.5 rounded">&lt;form&gt;</code>, <code className="text-gray-300 bg-gray-800 px-1 py-0.5 rounded">&lt;table&gt;</code>, and <code className="text-gray-300 bg-gray-800 px-1 py-0.5 rounded">&lt;article&gt;</code> - Clearly defines its content.</p>

        <h3 className="text-xl font-semibold text-gray-200 mt-6">New HTML5 Semantic Elements</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="border border-gray-700 p-4 rounded-lg bg-gray-800 shadow-sm">
            <code className="text-orange-400 font-bold">&lt;header&gt;</code>
            <p className="text-sm text-gray-400 mt-1">Defines a header for a document or section.</p>
          </div>
          <div className="border border-gray-700 p-4 rounded-lg bg-gray-800 shadow-sm">
            <code className="text-orange-400 font-bold">&lt;nav&gt;</code>
            <p className="text-sm text-gray-400 mt-1">Defines a set of navigation links.</p>
          </div>
          <div className="border border-gray-700 p-4 rounded-lg bg-gray-800 shadow-sm">
            <code className="text-orange-400 font-bold">&lt;section&gt;</code>
            <p className="text-sm text-gray-400 mt-1">Defines a section in a document.</p>
          </div>
          <div className="border border-gray-700 p-4 rounded-lg bg-gray-800 shadow-sm">
            <code className="text-orange-400 font-bold">&lt;article&gt;</code>
            <p className="text-sm text-gray-400 mt-1">Defines an independent, self-contained content.</p>
          </div>
          <div className="border border-gray-700 p-4 rounded-lg bg-gray-800 shadow-sm">
            <code className="text-orange-400 font-bold">&lt;aside&gt;</code>
            <p className="text-sm text-gray-400 mt-1">Defines content aside from the page content (like a sidebar).</p>
          </div>
          <div className="border border-gray-700 p-4 rounded-lg bg-gray-800 shadow-sm">
            <code className="text-orange-400 font-bold">&lt;footer&gt;</code>
            <p className="text-sm text-gray-400 mt-1">Defines a footer for a document or section.</p>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-gray-200 mt-8">Div and Span</h3>
        <p className="text-gray-300">When no semantic element fits, use block-level <code className="text-gray-300 bg-gray-800 px-1 py-0.5 rounded">&lt;div&gt;</code> for structure and inline <code className="text-gray-300 bg-gray-800 px-1 py-0.5 rounded">&lt;span&gt;</code> for text styling.</p>
      </div>
    )
  },
  {
    id: 'forms',
    title: '7. HTML Forms',
    time: '5 mins',
    content: (
      <div className="space-y-4">
        <h2 className="text-3xl font-bold text-gray-100">HTML Forms</h2>
        <p className="text-gray-300 text-lg">An HTML form is used to collect user input. The user input is most often sent to a server for processing.</p>
        
        <CodeBlock code={`<form action="/action_page.php">
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname" value="Ahmed"><br>
  
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname" value="Al-Kataby"><br><br>
  
  <input type="submit" value="Submit">
</form>`} />

        <h3 className="text-xl font-semibold text-gray-200 mt-8">The &lt;input&gt; Element</h3>
        <p className="text-gray-300">The <code className="text-gray-300 bg-gray-800 px-1 py-0.5 rounded">&lt;input&gt;</code> element is the most used form element. It can be displayed in many ways, depending on the <code className="text-gray-300 bg-gray-800 px-1 py-0.5 rounded">type</code> attribute.</p>
        
        <ul className="list-disc ml-5 mt-2 space-y-2 text-gray-300">
          <li><code className="text-gray-300 bg-gray-800 px-1 py-0.5 rounded">&lt;input type="text"&gt;</code> - Displays a single-line text input field</li>
          <li><code className="text-gray-300 bg-gray-800 px-1 py-0.5 rounded">&lt;input type="radio"&gt;</code> - Displays a radio button (for selecting one of many choices)</li>
          <li><code className="text-gray-300 bg-gray-800 px-1 py-0.5 rounded">&lt;input type="checkbox"&gt;</code> - Displays a checkbox (for selecting zero or more of many choices)</li>
          <li><code className="text-gray-300 bg-gray-800 px-1 py-0.5 rounded">&lt;input type="submit"&gt;</code> - Displays a submit button (for submitting the form)</li>
          <li><code className="text-gray-300 bg-gray-800 px-1 py-0.5 rounded">&lt;input type="button"&gt;</code> - Displays a clickable button</li>
        </ul>
      </div>
    )
  }
];

// --- VIEWS ---

const Html5CourseView = ({ onBack }) => {
  const [activeSection, setActiveSection] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [completedSections, setCompletedSections] = useState([]);

  const progress = Math.round((completedSections.length / courseSections.length) * 100);

  const handleNext = () => {
    if (!completedSections.includes(activeSection)) {
      setCompletedSections([...completedSections, activeSection]);
    }
    if (activeSection < courseSections.length - 1) {
      setActiveSection(activeSection + 1);
      window.scrollTo(0, 0);
    }
  };

  const handlePrev = () => {
    if (activeSection > 0) {
      setActiveSection(activeSection - 1);
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col font-sans">
      {/* Top Navbar */}
      <nav className="bg-[#E34F26] text-white shadow-md sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center space-x-3">
              <button 
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="md:hidden p-2 rounded-md hover:bg-orange-700 focus:outline-none transition-colors"
              >
                {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
              
              <button 
                onClick={onBack}
                className="hidden md:flex items-center space-x-1 p-2 rounded-md hover:bg-orange-700 transition-colors mr-2"
                title="Back to Dashboard"
              >
                <ArrowLeft size={20} />
              </button>

              <div className="flex items-center space-x-2 border-l border-orange-500 pl-4">
                <Code size={24} className="text-orange-200" />
                <span className="font-bold text-lg sm:text-xl tracking-tight">HTML5 Crash Course</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="hidden sm:flex flex-col items-end">
                <span className="text-xs text-orange-200 font-medium">Progress</span>
                <div className="w-24 md:w-32 bg-orange-800 rounded-full h-2.5 mt-1 overflow-hidden">
                  <div className="bg-orange-300 h-2.5 rounded-full transition-all duration-500" style={{ width: `${progress}%` }}></div>
                </div>
              </div>
              <span className="text-sm font-bold bg-orange-800 px-3 py-1 rounded-full shadow-sm">{progress}%</span>
              
              {/* Mobile Back Button */}
              <button 
                onClick={onBack}
                className="md:hidden p-2 rounded-md hover:bg-orange-700 transition-colors"
              >
                <ArrowLeft size={20} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <div className="flex flex-1 overflow-hidden">
        
        {/* Sidebar Navigation */}
        <aside 
          className={`
            ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
            md:translate-x-0 
            fixed md:static inset-y-0 left-0 z-20 w-72 bg-gray-800 border-r border-gray-700 shadow-2xl md:shadow-none
            transform transition-transform duration-300 ease-in-out flex flex-col
          `}
        >
          <div className="p-5 border-b border-gray-700 bg-gray-900/50">
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider">Course Outline</h3>
            <p className="text-xs text-gray-500 mt-1 flex items-center"><Clock size={12} className="mr-1"/> Total time: ~45 mins</p>
          </div>
          <div className="flex-1 overflow-y-auto py-2">
            <nav className="space-y-1 px-3">
              {courseSections.map((section, index) => {
                const isActive = index === activeSection;
                const isCompleted = completedSections.includes(index);
                
                return (
                  <button
                    key={section.id}
                    onClick={() => {
                      setActiveSection(index);
                      setIsSidebarOpen(false);
                    }}
                    className={`
                      w-full flex items-center justify-between px-3 py-3 text-left rounded-lg transition-colors
                      ${isActive ? 'bg-[#E34F26]/20 text-[#E34F26] font-semibold' : 'text-gray-300 hover:bg-gray-700/50'}
                    `}
                  >
                    <div className="flex items-center overflow-hidden">
                      {isCompleted ? (
                        <CheckCircle2 size={16} className="text-[#E34F26] mr-2 flex-shrink-0" />
                      ) : isActive ? (
                        <Play size={14} className="text-[#E34F26] mr-2 flex-shrink-0 fill-current" />
                      ) : (
                        <div className="w-4 h-4 mr-2 flex-shrink-0 rounded-full border-2 border-gray-600" />
                      )}
                      <span className="truncate text-sm">{section.title}</span>
                    </div>
                    <span className="text-xs text-gray-500 ml-2 whitespace-nowrap">{section.time}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        </aside>

        {isSidebarOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-60 z-10 md:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {/* Content Panel */}
        <main className="flex-1 overflow-y-auto bg-gray-900 flex flex-col">
          <div className="flex-1 max-w-4xl mx-auto w-full p-6 md:p-10 pb-24">
            <div>
              <div className="mb-8">
                <span className="inline-block py-1 px-3 rounded-full bg-[#E34F26]/20 text-[#E34F26] text-xs font-bold uppercase tracking-wider mb-3 border border-[#E34F26]/30">
                  Section {activeSection + 1} of {courseSections.length}
                </span>
                {courseSections[activeSection].content}
              </div>
            </div>
            <Footer />
          </div>

          {/* Bottom Navigation Bar */}
          <div className="bg-gray-800 border-t border-gray-700 p-4 sticky bottom-0 z-10">
            <div className="max-w-4xl mx-auto flex justify-between items-center">
              <button
                onClick={handlePrev}
                disabled={activeSection === 0}
                className={`px-5 py-2.5 rounded-md font-medium transition-colors ${
                  activeSection === 0 
                    ? 'bg-gray-700 text-gray-500 cursor-not-allowed' 
                    : 'bg-gray-800 text-gray-300 border border-gray-600 hover:bg-gray-700 shadow-sm'
                }`}
              >
                Previous
              </button>
              
              <button
                onClick={handleNext}
                className="flex items-center px-6 py-2.5 bg-[#E34F26] text-white rounded-md font-medium hover:bg-[#c9431e] shadow-sm transition-colors"
              >
                {activeSection === courseSections.length - 1 ? 'Finish Course' : 'Next Lesson'}
                {activeSection !== courseSections.length - 1 && <ChevronRight size={18} className="ml-1" />}
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

const HomeDashboardView = ({ onSelectCourse }) => {
  const allCourses = [
    {
      id: 'html5',
      name: 'HTML5',
      description: 'Master the standard markup language for web pages.',
      tags: ['Frontend', 'Beginner'],
      logo: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-12 h-12">
          <path fill="#E34F26" d="M71,460 L30,4 L482,4 L441,460 L256,512 Z" />
          <path fill="#EF652A" d="M256,472 L403,431 L440,37 L256,37 Z" />
          <path fill="#EBEBEB" d="M256,208 L181,208 L176,150 L256,150 L256,94 L114,94 L115,110 L129,265 L256,265 Z M256,355 L255,355 L192,338 L187,287 L131,287 L140,386 L256,418 Z" />
          <path fill="#FFFFFF" d="M256,208 L256,265 L325,265 L318,338 L256,355 L256,418 L371,386 L372,377 L385,208 Z M256,94 L256,150 L390,150 L395,94 Z" />
        </svg>
      ),
      hoverEffect: 'hover:border-[#E34F26] hover:shadow-[0_8px_30px_rgba(227,79,38,0.2)]',
      status: 'available',
      time: '45 mins'
    },
    {
      id: 'css3',
      name: 'CSS3',
      description: 'Learn to style and layout beautiful web pages.',
      tags: ['Frontend', 'Beginner'],
      logo: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-12 h-12">
          <path fill="#1572B6" d="M71,460 L30,4 L482,4 L441,460 L256,512 Z" />
          <path fill="#33A9DC" d="M256,472 L403,431 L440,37 L256,37 Z" />
          <path fill="#FFFFFF" d="M127,94 L385,94 L378,174 L134,174 L139,232 L315,232 L308,318 L256,335 L204,318 L199,267 L143,267 L152,366 L256,398 L360,366 L385,94 Z" />
        </svg>
      ),
      hoverEffect: 'hover:border-[#1572B6] hover:shadow-[0_8px_30px_rgba(21,114,182,0.2)]',
      status: 'coming_soon'
    },
    {
      id: 'js',
      name: 'JavaScript',
      description: 'Add interactivity and logic to your websites.',
      tags: ['Frontend', 'Intermediate'],
      logo: (
        <svg viewBox="0 0 512 512" className="w-12 h-12 rounded-xl">
          <rect width="512" height="512" rx="45" fill="#F7DF1E" />
          <path d="M320,410 C320,445 350,470 395,470 C435,470 460,450 460,420 C460,390 440,380 400,370 C350,355 315,340 315,290 C315,245 350,220 395,220 C445,220 475,245 480,285 L430,295 C425,270 410,260 395,260 C375,260 365,270 365,290 C365,315 390,325 425,335 C475,350 510,370 510,420 C510,470 470,510 395,510 C330,510 285,480 270,430 L320,410 Z" fill="#000000" />
          <path d="M230,415 C230,455 205,470 170,470 C130,470 110,455 100,430 L150,410 C155,425 165,435 175,435 C190,435 195,425 195,410 L195,225 L245,225 L245,415 L230,415 Z" fill="#000000" />
        </svg>
      ),
      hoverEffect: 'hover:border-[#F7DF1E] hover:shadow-[0_8px_30px_rgba(247,223,30,0.2)]',
      status: 'coming_soon'
    },
    {
      id: 'react',
      name: 'React',
      description: 'Build modern user interfaces with components.',
      tags: ['Frontend', 'Advanced'],
      logo: (
        <svg viewBox="-11.5 -10.2 23 20.4" className="w-14 h-14 text-[#61DAFB] group-hover:animate-[spin_10s_linear_infinite]">
          <circle cx="0" cy="0" r="2.05" fill="currentColor"/>
          <g stroke="currentColor" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2"/>
            <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
            <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
          </g>
        </svg>
      ),
      hoverEffect: 'hover:border-[#61DAFB] hover:shadow-[0_8px_30px_rgba(97,218,251,0.2)]',
      status: 'coming_soon'
    },
    {
      id: 'node',
      name: 'Node.js',
      description: 'Run JavaScript on the server for full-stack apps.',
      tags: ['Backend', 'Intermediate'],
      logo: (
        <svg viewBox="0 0 120 120" className="w-14 h-14">
          <path d="M60 10 L105 35 L105 85 L60 110 L15 85 L15 35 Z" fill="#339933" fillOpacity="0.1" stroke="#339933" strokeWidth="4" />
          <path d="M60 10 L60 110 M15 35 L105 85 M15 85 L105 35" stroke="#339933" strokeWidth="2" strokeOpacity="0.5" />
          <circle cx="60" cy="10" r="6" fill="#43853d" />
          <circle cx="105" cy="35" r="6" fill="#43853d" />
          <circle cx="105" cy="85" r="6" fill="#43853d" />
          <circle cx="60" cy="110" r="6" fill="#43853d" />
          <circle cx="15" cy="85" r="6" fill="#43853d" />
          <circle cx="15" cy="35" r="6" fill="#43853d" />
          <circle cx="60" cy="60" r="8" fill="#339933" />
        </svg>
      ),
      hoverEffect: 'hover:border-[#339933] hover:shadow-[0_8px_30px_rgba(51,153,51,0.2)]',
      status: 'coming_soon'
    },
    {
      id: 'postgres',
      name: 'PostgreSQL',
      description: 'Design and query powerful relational databases.',
      tags: ['Database', 'Intermediate'],
      logo: (
        <svg viewBox="0 0 100 100" className="w-12 h-12">
          <ellipse cx="50" cy="25" rx="40" ry="15" fill="#336791" />
          <ellipse cx="50" cy="25" rx="40" ry="15" fill="none" stroke="#6094C0" strokeWidth="3" />
          <path d="M 10,25 L 10,50 C 10,65 90,65 90,50 L 90,25 Z" fill="#2E5C82" />
          <ellipse cx="50" cy="50" rx="40" ry="15" fill="none" stroke="#6094C0" strokeWidth="3" />
          <path d="M 10,50 L 10,75 C 10,90 90,90 90,75 L 90,50 Z" fill="#244B6B" />
          <ellipse cx="50" cy="75" rx="40" ry="15" fill="none" stroke="#6094C0" strokeWidth="3" />
          <path d="M 15,30 L 15,70" stroke="#6094C0" strokeWidth="4" strokeLinecap="round" opacity="0.6" />
        </svg>
      ),
      hoverEffect: 'hover:border-[#336791] hover:shadow-[0_8px_30px_rgba(51,103,145,0.2)]',
      status: 'coming_soon'
    }
  ];

  return (
    <div className="min-h-screen bg-[#0f172a] text-white p-6 md:p-12 font-sans overflow-x-hidden selection:bg-indigo-500/30">
      <div className="max-w-6xl mx-auto relative">
        
        {/* Improved Hero Header Section */}
        <header className="relative mb-16 mt-4 p-8 md:p-12 rounded-[2.5rem] overflow-hidden border border-slate-800/60 bg-slate-900/40 shadow-2xl">
          {/* Background Atmospheric Glows */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 rounded-full bg-indigo-600/20 blur-[80px] pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 rounded-full bg-cyan-600/20 blur-[80px] pointer-events-none"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-indigo-500/10 rounded-2xl border border-indigo-500/20">
                  <LayoutTemplate className="text-indigo-400 w-8 h-8" />
                </div>
                <div className="flex items-center px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-sm font-medium text-slate-300">
                  <Sparkles size={14} className="text-yellow-400 mr-2" />
                  Interactive Learning
                </div>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white leading-tight mb-4">
                Full-Stack <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-emerald-400">Bootcamp</span>
              </h1>
              
              <p className="text-slate-400 text-lg md:text-xl max-w-xl leading-relaxed">
                Select a course to start learning. Master the fundamentals of frontend and backend web development step-by-step through interactive lessons.
              </p>
            </div>
            
            {/* Stats/Summary Box */}
            <div className="hidden lg:flex flex-col gap-4 p-6 rounded-2xl bg-slate-800/50 border border-slate-700 backdrop-blur-sm min-w-[200px]">
              <div>
                <p className="text-sm text-slate-400 mb-1">Total Courses</p>
                <p className="text-3xl font-bold text-white">6</p>
              </div>
              <div className="w-full h-px bg-slate-700"></div>
              <div>
                <p className="text-sm text-slate-400 mb-1">Your Progress</p>
                <div className="flex items-center gap-3 mt-1">
                  <div className="flex-1 h-2 rounded-full bg-slate-700 overflow-hidden">
                    <div className="w-0 h-full bg-indigo-500 rounded-full"></div>
                  </div>
                  <span className="text-sm font-bold">0%</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Enhanced Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allCourses.map((course) => {
            const isAvailable = course.status === 'available';
            
            return (
              <div 
                key={course.id}
                onClick={() => isAvailable && onSelectCourse(course.id)}
                className={`group relative flex flex-col h-full overflow-hidden rounded-3xl border transition-all duration-500 ease-out
                  ${isAvailable 
                    ? 'cursor-pointer hover:-translate-y-2 bg-slate-800/40 border-slate-700 hover:bg-slate-800 ' + course.hoverEffect 
                    : 'cursor-not-allowed opacity-75 bg-slate-900/30 border-slate-800 grayscale-[0.3]'
                  }
                  backdrop-blur-md
                `}
              >
                {/* Course Content Area */}
                <div className="p-6 md:p-8 flex flex-col flex-grow relative z-10">
                  
                  {/* Top Row: Logo & Tags */}
                  <div className="flex justify-between items-start mb-6">
                    <div className={`
                      w-16 h-16 rounded-2xl flex items-center justify-center bg-slate-900/50 border border-slate-700/50 shadow-lg transition-transform duration-500
                      ${isAvailable ? 'group-hover:scale-110 group-hover:rotate-3' : ''}
                    `}>
                      {course.logo}
                    </div>

                    <div className="flex flex-col items-end gap-2">
                      {isAvailable ? (
                        <span className="bg-emerald-500/10 text-emerald-400 text-[10px] uppercase tracking-wider font-bold px-3 py-1 rounded-full border border-emerald-500/20 shadow-sm">
                          Available
                        </span>
                      ) : (
                        <span className="flex items-center bg-slate-800 text-slate-400 text-[10px] uppercase tracking-wider font-bold px-3 py-1 rounded-full border border-slate-700">
                          <Lock size={10} className="mr-1" /> Locked
                        </span>
                      )}
                      
                      {/* Category Tags */}
                      <div className="flex gap-1.5">
                        {course.tags.map(tag => (
                          <span key={tag} className="text-[10px] px-2 py-0.5 rounded-md bg-slate-800 text-slate-300 font-medium">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">{course.name}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{course.description}</p>
                  </div>
                  
                  {/* Bottom Action Area */}
                  <div className="mt-8 pt-4 border-t border-slate-700/50 flex items-center justify-between">
                    <div className="flex items-center text-sm font-medium text-slate-400">
                      <Clock size={16} className="mr-2 opacity-70" /> 
                      {course.time}
                    </div>
                    
                    {isAvailable && (
                      <div className="flex items-center text-sm font-bold text-indigo-400 transition-transform duration-300 group-hover:translate-x-1">
                        Start <ChevronRight size={18} className="ml-1" />
                      </div>
                    )}
                  </div>
                </div>

                {/* Subtle Hover Gradient Overlay */}
                {isAvailable && (
                  <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Global Footer */}
      <div className="px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <Footer />
        </div>
      </div>
    </div>
  );
};

// --- MAIN APP CONTROLLER ---

export default function App() {
  const [currentView, setCurrentView] = useState('home'); // 'home' | 'html5'

  // Effect to update Document Title and Favicon dynamically on load
  useEffect(() => {
    // 1. Set the Title
    document.title = "Full-Stack Bootcamp";

    // 2. Set the dynamic SVG Favicon
    const svgFavicon = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="%23818cf8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line></svg>`;
    
    let link = document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.head.appendChild(link);
    }
    link.href = svgFavicon;
  }, []);

  if (currentView === 'html5') {
    return <Html5CourseView onBack={() => setCurrentView('home')} />;
  }

  return <HomeDashboardView onSelectCourse={setCurrentView} />;
}
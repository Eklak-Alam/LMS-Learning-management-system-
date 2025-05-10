import { Check, Search, UserPlus, BookOpen, Award } from 'lucide-react';

const processSteps = [
  {
    id: 1,
    icon: <Search className="h-8 w-8 text-lms-primary" />,
    title: 'Find Your Course',
    description: 'Explore a vast library of courses across various domains and skill levels.'
  },
  {
    id: 2,
    icon: <UserPlus className="h-8 w-8 text-lms-primary" />,
    title: 'Enroll & Register',
    description: 'Create your account and enroll in courses easily through our smooth process.'
  },
  {
    id: 3,
    icon: <BookOpen className="h-8 w-8 text-lms-primary" />,
    title: 'Learn at Your Pace',
    description: 'Study at your convenience with flexible schedules and lifetime access.'
  },
  {
    id: 4,
    icon: <Award className="h-8 w-8 text-lms-primary" />,
    title: 'Get Certified',
    description: 'Finish the course and earn certificates recognized across industries.'
  }
];

const Process = () => {
  return (
    <section id="process" className="py-20 bg-lms-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Follow our simple four-step process to begin your learning journey.
          </p>
        </div>

        {/* Steps Section */}
        <div className="relative">
          {/* Horizontal Line for medium+ */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-lms-soft z-0 transform -translate-y-1/2" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 relative z-10">
            {processSteps.map((step) => (
              <div key={step.id} className="relative bg-white p-6 rounded-xl shadow-lg text-center animate-fade-in transition hover:scale-[1.02] hover:shadow-xl">
                {/* Step Icon */}
                <div className="w-14 h-14 flex items-center justify-center bg-lms-soft rounded-full mx-auto mb-4">
                  {step.icon}
                </div>

                {/* Step Number */}
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-lms-primary text-white font-bold flex items-center justify-center rounded-full shadow">
                  {step.id}
                </div>

                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-white rounded-2xl shadow-xl p-8 md:p-10 flex flex-col md:flex-row items-center gap-10 animate-fade-in">
          <div className="md:w-2/3">
            <h3 className="text-2xl font-bold mb-4">Start Your Journey Today</h3>
            <p className="text-gray-600 mb-4">
              Join thousands of learners and unlock your potential with access to world-class content.
            </p>

            <ul className="space-y-2 text-gray-700">
              {[
                'Access 500+ expert-led courses',
                'Flexible learning anytime, anywhere',
                'Practical projects to build your portfolio',
                'Affordable subscription plans'
              ].map((feature, idx) => (
                <li key={idx} className="flex items-center">
                  <Check className="h-5 w-5 text-lms-primary mr-2" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="md:w-1/3 w-full">
            <div className="bg-lms-soft p-6 rounded-xl text-center shadow-inner">
              <p className="text-lg font-bold text-lms-primary mb-1">Start Free</p>
              <p className="text-sm text-gray-600 mb-4">Try all features with zero upfront cost</p>
              <button className="btn-primary w-full py-2 rounded-md bg-black text-white">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;

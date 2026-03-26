import data from "@/data/conference.json";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Committees() {
  return (
    <section id="committees" className="py-24 bg-slate-50">
      <div className="container px-4 mx-auto">
        
        {/* Advisory Board */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-2">Leadership</h2>
            <h3 className="text-3xl font-heading font-bold text-slate-900">Advisory Board</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.advisoryBoard.map((member, idx) => (
              <Card key={idx} className="group bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="relative mb-4">
                    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary/10 group-hover:border-primary/30 transition-colors">
                      {member.image ? (
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=random`;
                          }}
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5">
                          <span className="text-4xl font-bold text-primary/60">
                            {member.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="text-center">
                    <h4 className="font-bold text-xl text-slate-800 mb-1">{member.name}</h4>
                    <p className="text-primary font-medium text-sm mb-2">{member.role}</p>
                    <p className="text-slate-600 text-sm">{member.affiliation}</p>
                    {member.linkedin && (
                      <a 
                        href={member.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-block mt-3 text-primary hover:text-primary/80 transition-colors"
                        aria-label={`${member.name}'s LinkedIn profile`}
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Organizing Committee */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-heading font-bold text-slate-900">Organizing Committee</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h4 className="font-bold text-xl text-primary border-b border-primary/20 pb-2">Patrons</h4>
              <ul className="space-y-2">
                {data.organizingCommittee.patrons.map((p, i) => (
                  <li key={i} className="text-slate-700">{p}</li>
                ))}
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-bold text-xl text-primary border-b border-primary/20 pb-2">General Chairs</h4>
              <ul className="space-y-2">
                {data.organizingCommittee.generalChairs.map((p, i) => (
                  <li key={i} className="text-slate-700">{p}</li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-xl text-primary border-b border-primary/20 pb-2">Coordinators</h4>
              <ul className="space-y-2">
                {data.organizingCommittee.technicalCoordinators.map((p, i) => (
                  <li key={i} className="text-slate-700">{p}</li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-xl text-primary border-b border-primary/20 pb-2">Volunteers</h4>
              <ul className="space-y-2">
                {data.organizingCommittee.studentVolunteers.map((p, i) => (
                  <li key={i} className="text-slate-700">{p}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

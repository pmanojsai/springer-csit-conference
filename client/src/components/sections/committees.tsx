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
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.advisoryBoard.map((member, idx) => (
              <Card key={idx} className="bg-white border-none shadow-sm hover:shadow-md transition-all">
                <CardContent className="p-6 flex items-start gap-4">
                  <Avatar className="w-16 h-16 border-2 border-slate-100">
                    <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${member.name}`} />
                    <AvatarFallback>{member.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-bold text-lg text-slate-900">{member.name}</h4>
                    <p className="text-primary font-medium text-sm mb-1">{member.role}</p>
                    <p className="text-slate-500 text-sm">{member.affiliation}</p>
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

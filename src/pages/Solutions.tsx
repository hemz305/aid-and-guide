import { useParams, useNavigate } from "react-router-dom";
import { techIssues } from "@/data/techIssues";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, CheckCircle, AlertTriangle, Info } from "lucide-react";

const solutionsData = {
  "wifi-no-internet": [
    {
      step: 1,
      title: "Restart Your Router and Modem",
      description: "Unplug both devices for 30 seconds, then plug modem first, wait 1 minute, then plug router.",
      type: "basic"
    },
    {
      step: 2,
      title: "Check Wi-Fi Settings",
      description: "Go to Wi-Fi settings and forget/reconnect to your network. Ensure you're entering the correct password.",
      type: "basic"
    },
    {
      step: 3,
      title: "Update Network Drivers",
      description: "Open Device Manager > Network adapters > Right-click your Wi-Fi adapter > Update driver.",
      type: "intermediate"
    },
    {
      step: 4,
      title: "Reset Network Settings",
      description: "Open Command Prompt as admin and run: ipconfig /release, ipconfig /flushdns, ipconfig /renew",
      type: "advanced"
    },
    {
      step: 5,
      title: "Check ISP Status",
      description: "Contact your Internet Service Provider to check for outages in your area.",
      type: "basic"
    }
  ],
  "laptop-not-booting": [
    {
      step: 1,
      title: "Check Power Connection",
      description: "Ensure the charger is properly connected and the power LED is on. Try a different power outlet.",
      type: "basic"
    },
    {
      step: 2,
      title: "Remove External Devices",
      description: "Disconnect all USB devices, external monitors, and peripherals, then try booting.",
      type: "basic"
    },
    {
      step: 3,
      title: "Boot into Safe Mode",
      description: "Press F8 or Shift+F8 during startup to access Advanced Boot Options and select Safe Mode.",
      type: "intermediate"
    },
    {
      step: 4,
      title: "Reset BIOS Settings",
      description: "Enter BIOS setup (usually F2 or Delete at startup) and reset to default settings.",
      type: "advanced"
    },
    {
      step: 5,
      title: "Check Hardware Connections",
      description: "Reseat RAM modules and hard drive connections. If comfortable, open the laptop and check internal connections.",
      type: "advanced"
    }
  ],
  "no-sound": [
    {
      step: 1,
      title: "Check Volume Settings",
      description: "Ensure volume is turned up and not muted. Check both system volume and application volume.",
      type: "basic"
    },
    {
      step: 2,
      title: "Select Correct Audio Device",
      description: "Right-click speaker icon > Open Sound settings > Choose correct output device.",
      type: "basic"
    },
    {
      step: 3,
      title: "Update Audio Drivers",
      description: "Open Device Manager > Sound, video and game controllers > Update audio driver.",
      type: "intermediate"
    },
    {
      step: 4,
      title: "Run Audio Troubleshooter",
      description: "Go to Settings > Update & Security > Troubleshoot > Playing Audio > Run troubleshooter.",
      type: "intermediate"
    },
    {
      step: 5,
      title: "Restart Audio Services",
      description: "Press Win+R, type services.msc, find Windows Audio service and restart it.",
      type: "advanced"
    }
  ],
  "battery-not-charging": [
    {
      step: 1,
      title: "Check Charger and Cable",
      description: "Inspect the charger for damage. Try a different power outlet and ensure all connections are secure.",
      type: "basic"
    },
    {
      step: 2,
      title: "Clean Charging Port",
      description: "Use compressed air to clean the charging port of dust and debris.",
      type: "basic"
    },
    {
      step: 3,
      title: "Calibrate Battery",
      description: "Drain battery completely, then charge to 100% without interruption.",
      type: "intermediate"
    },
    {
      step: 4,
      title: "Update Battery Drivers",
      description: "Device Manager > Batteries > Right-click each battery device > Update driver.",
      type: "intermediate"
    },
    {
      step: 5,
      title: "Check Battery Health",
      description: "Run battery report: Win+X > Command Prompt (Admin) > powercfg /batteryreport",
      type: "advanced"
    }
  ],
  // Add more solutions for other issues...
  "auto-restart": [
    {
      step: 1,
      title: "Check for Overheating",
      description: "Feel if laptop is hot, clean vents with compressed air, ensure proper ventilation.",
      type: "basic"
    },
    {
      step: 2,
      title: "Disable Automatic Restart",
      description: "Right-click This PC > Properties > Advanced system settings > Startup and Recovery > Uncheck 'Automatically restart'",
      type: "basic"
    },
    {
      step: 3,
      title: "Check Windows Updates",
      description: "Go to Settings > Update & Security > Windows Update and install pending updates.",
      type: "intermediate"
    },
    {
      step: 4,
      title: "Run Memory Diagnostic",
      description: "Press Win+R, type mdsched.exe, select 'Restart now and check for problems'",
      type: "advanced"
    },
    {
      step: 5,
      title: "Check Event Viewer",
      description: "Press Win+X > Event Viewer > Windows Logs > System to identify error patterns.",
      type: "advanced"
    }
  ]
};

export default function Solutions() {
  const { issueId } = useParams();
  const navigate = useNavigate();
  
  const issue = techIssues.find(issue => issue.id === issueId);
  const solutions = solutionsData[issueId as keyof typeof solutionsData] || [];

  if (!issue) {
    return (
      <div className="min-h-screen bg-gradient-dark flex items-center justify-center">
        <Card className="max-w-md mx-auto">
          <CardContent className="p-6 text-center">
            <AlertTriangle className="h-12 w-12 text-tech-orange mx-auto mb-4" />
            <h2 className="text-xl font-bold mb-2">Issue Not Found</h2>
            <p className="text-muted-foreground mb-4">The requested technical issue could not be found.</p>
            <Button onClick={() => navigate('/')} className="bg-gradient-primary text-white">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const getStepIcon = (type: string) => {
    switch (type) {
      case 'basic':
        return <CheckCircle className="w-5 h-5 text-tech-green" />;
      case 'intermediate':
        return <Info className="w-5 h-5 text-tech-blue" />;
      case 'advanced':
        return <AlertTriangle className="w-5 h-5 text-tech-orange" />;
      default:
        return <CheckCircle className="w-5 h-5 text-tech-green" />;
    }
  };

  const getStepColor = (type: string) => {
    switch (type) {
      case 'basic':
        return 'border-tech-green';
      case 'intermediate':
        return 'border-tech-blue';
      case 'advanced':
        return 'border-tech-orange';
      default:
        return 'border-tech-green';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-dark py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Button 
            onClick={() => navigate('/')} 
            variant="outline" 
            className="mb-6 border-border hover:bg-accent"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Issues
          </Button>
          
          <Card className="bg-gradient-card border-border shadow-premium">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="p-4 bg-gradient-primary rounded-xl text-white">
                  {issue.icon}
                </div>
                <div>
                  <div className="text-sm font-medium text-tech-blue mb-1 uppercase tracking-wider">
                    {issue.category}
                  </div>
                  <CardTitle className="text-2xl text-foreground">{issue.title}</CardTitle>
                  <p className="text-muted-foreground mt-2">{issue.description}</p>
                </div>
              </div>
            </CardHeader>
          </Card>
        </div>

        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-foreground mb-6">Step-by-Step Solutions</h2>
          
          {solutions.length > 0 ? (
            solutions.map((solution, index) => (
              <Card key={index} className={`bg-gradient-card border-2 ${getStepColor(solution.type)} shadow-card hover:shadow-premium transition-all duration-300`}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 bg-primary rounded-full text-primary-foreground font-bold text-lg">
                      {solution.step}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        {getStepIcon(solution.type)}
                        <h3 className="text-xl font-semibold text-foreground">{solution.title}</h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium uppercase tracking-wide ${
                          solution.type === 'basic' ? 'bg-tech-green/20 text-tech-green' :
                          solution.type === 'intermediate' ? 'bg-tech-blue/20 text-tech-blue' :
                          'bg-tech-orange/20 text-tech-orange'
                        }`}>
                          {solution.type}
                        </span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{solution.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <Card className="bg-gradient-card border-border">
              <CardContent className="p-6 text-center">
                <Info className="h-12 w-12 text-tech-blue mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Solutions Coming Soon</h3>
                <p className="text-muted-foreground">
                  We're working on detailed solutions for this issue. Please check back later or contact our support team for immediate assistance.
                </p>
                <div className="mt-6 space-y-2">
                  <Button className="bg-gradient-primary text-white mr-4">
                    Contact Support
                  </Button>
                  <Button variant="outline" onClick={() => navigate('/')}>
                    Browse Other Issues
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        <Card className="mt-8 bg-gradient-card border-border">
          <CardContent className="p-6 text-center">
            <h3 className="text-xl font-semibold text-foreground mb-2">Still Need Help?</h3>
            <p className="text-muted-foreground mb-4">
              If these solutions didn't resolve your issue, our expert support team is here to help.
            </p>
            <div className="flex gap-4 justify-center">
              <Button className="bg-gradient-primary text-white">
                Book a Call
              </Button>
              <Button variant="outline">
                Live Chat
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
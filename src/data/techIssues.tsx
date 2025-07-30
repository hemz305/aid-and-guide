import { 
  Wifi, 
  Laptop, 
  Volume2, 
  Battery, 
  RotateCcw, 
  Printer, 
  Snowflake, 
  Globe, 
  FolderLock, 
  Lock, 
  Gauge, 
  AlertTriangle, 
  HardDrive, 
  Shield, 
  Mouse, 
  Smartphone, 
  AlertCircle, 
  RefreshCw, 
  Bluetooth,
  Cloud
} from "lucide-react";

export interface TechIssue {
  id: string;
  icon: React.ReactNode;
  title: string;
  category: string;
  description: string;
  pdfName: string;
  searchTerms: string[];
}

export const techIssues: TechIssue[] = [
  {
    id: "wifi-no-internet",
    icon: <Wifi className="w-6 h-6" />,
    title: "Wi-Fi Connected, But No Internet",
    category: "Wi-Fi Issues",
    description: "Connected to Wi-Fi but can't browse the internet. Learn how to restart router, check ISP settings, and update drivers.",
    pdfName: "wifi-no-internet-guide.pdf",
    searchTerms: ["wifi", "internet", "connection", "router", "network"]
  },
  {
    id: "laptop-not-booting",
    icon: <Laptop className="w-6 h-6" />,
    title: "Laptop Not Booting into Windows",
    category: "Boot Problems",
    description: "Laptop powers on but won't start Windows. Includes Safe Mode, BIOS reset, and hardware troubleshooting steps.",
    pdfName: "laptop-boot-issues.pdf",
    searchTerms: ["boot", "startup", "windows", "laptop", "bios", "safe mode"]
  },
  {
    id: "no-sound",
    icon: <Volume2 className="w-6 h-6" />,
    title: "No Sound from Speakers or Headphones",
    category: "Audio Issues",
    description: "Fix audio problems by troubleshooting sound drivers, checking output devices, and adjusting system settings.",
    pdfName: "audio-troubleshooting.pdf",
    searchTerms: ["sound", "audio", "speakers", "headphones", "drivers"]
  },
  {
    id: "battery-not-charging",
    icon: <Battery className="w-6 h-6" />,
    title: "Laptop Battery Not Charging",
    category: "Charging Problems",
    description: "Resolve charging issues by checking charger cables, detecting battery wear, and adjusting BIOS settings.",
    pdfName: "battery-charging-fix.pdf",
    searchTerms: ["battery", "charging", "charger", "power", "laptop"]
  },
  {
    id: "auto-restart",
    icon: <RotateCcw className="w-6 h-6" />,
    title: "System Keeps Restarting Automatically",
    category: "Auto Restart",
    description: "Stop unexpected restarts by checking for overheating, Windows Update loops, and system stability issues.",
    pdfName: "auto-restart-fix.pdf",
    searchTerms: ["restart", "reboot", "automatic", "loop", "crash"]
  },
  {
    id: "printer-not-responding",
    icon: <Printer className="w-6 h-6" />,
    title: "Printer Not Responding",
    category: "Printer Issues",
    description: "Fix printer connectivity by checking connections, reinstalling drivers, with examples for Epson and HP printers.",
    pdfName: "printer-troubleshooting.pdf",
    searchTerms: ["printer", "printing", "drivers", "connection", "epson", "hp"]
  },
  {
    id: "system-freezing",
    icon: <Snowflake className="w-6 h-6" />,
    title: "Computer Freezes Randomly",
    category: "System Freezing",
    description: "Resolve random freezes by checking RAM, disk health, running malware scans, and system diagnostics.",
    pdfName: "system-freezing-fix.pdf",
    searchTerms: ["freeze", "freezing", "hang", "stuck", "ram", "memory"]
  },
  {
    id: "browser-problems",
    icon: <Globe className="w-6 h-6" />,
    title: "Websites Not Loading Properly",
    category: "Browser Problems",
    description: "Fix website loading issues by flushing DNS cache, clearing cookies, and using Incognito mode.",
    pdfName: "browser-troubleshooting.pdf",
    searchTerms: ["browser", "website", "loading", "dns", "cookies", "incognito"]
  },
  {
    id: "file-access",
    icon: <FolderLock className="w-6 h-6" />,
    title: "Can't Open Certain Files",
    category: "File Access",
    description: "Resolve file access issues by adjusting permissions, checking file formats, and compatibility settings.",
    pdfName: "file-access-fix.pdf",
    searchTerms: ["files", "permissions", "access", "open", "format"]
  },
  {
    id: "login-issues",
    icon: <Lock className="w-6 h-6" />,
    title: "Forgot Windows Login Password",
    category: "Login Issues",
    description: "Regain access with password reset disk, Safe Mode options, and creating new admin users.",
    pdfName: "password-recovery.pdf",
    searchTerms: ["password", "login", "forgot", "windows", "admin", "reset"]
  },
  {
    id: "slow-internet",
    icon: <Gauge className="w-6 h-6" />,
    title: "Pages Load Slowly or Timeout",
    category: "Slow Internet",
    description: "Improve internet speed by resetting router, checking background apps, and running ping tests.",
    pdfName: "slow-internet-fix.pdf",
    searchTerms: ["slow", "internet", "speed", "timeout", "router", "ping"]
  },
  {
    id: "software-errors",
    icon: <AlertTriangle className="w-6 h-6" />,
    title: "App Crashes or Fails to Open",
    category: "Software Errors",
    description: "Fix application crashes by reinstalling software, checking compatibility, and reviewing error logs.",
    pdfName: "software-crashes.pdf",
    searchTerms: ["app", "crash", "software", "error", "compatibility", "logs"]
  },
  {
    id: "storage-full",
    icon: <HardDrive className="w-6 h-6" />,
    title: "Disk Almost Full Even After Deleting Files",
    category: "Storage Full",
    description: "Free up space with disk cleanup, finding hidden files, and using tools like WinDirStat.",
    pdfName: "storage-cleanup.pdf",
    searchTerms: ["storage", "disk", "full", "space", "cleanup", "hidden files"]
  },
  {
    id: "virus-problems",
    icon: <Shield className="w-6 h-6" />,
    title: "System Infected with Malware",
    category: "Virus Problems",
    description: "Remove malware using Windows Defender, free antivirus tools, and boot-time scanning techniques.",
    pdfName: "malware-removal.pdf",
    searchTerms: ["virus", "malware", "antivirus", "defender", "infection", "scan"]
  },
  {
    id: "peripheral-issues",
    icon: <Mouse className="w-6 h-6" />,
    title: "Mouse/Keyboard Not Working",
    category: "Peripheral Issues",
    description: "Fix input device problems by checking USB ports, device manager, and trying alternate devices.",
    pdfName: "peripheral-troubleshooting.pdf",
    searchTerms: ["mouse", "keyboard", "usb", "device", "input", "peripheral"]
  },
  {
    id: "mobile-usb-issue",
    icon: <Smartphone className="w-6 h-6" />,
    title: "Phone Not Detected by PC",
    category: "Mobile USB Issue",
    description: "Connect your phone by enabling USB debugging, installing drivers, and checking cable connections.",
    pdfName: "mobile-pc-connection.pdf",
    searchTerms: ["phone", "mobile", "usb", "debugging", "drivers", "connection"]
  },
  {
    id: "blue-screen-error",
    icon: <AlertCircle className="w-6 h-6" />,
    title: "BSOD - System Crash",
    category: "Blue Screen Error",
    description: "Diagnose blue screen errors by understanding STOP codes and analyzing memory dump files.",
    pdfName: "blue-screen-fix.pdf",
    searchTerms: ["bsod", "blue screen", "crash", "stop", "memory dump", "error"]
  },
  {
    id: "os-update-errors",
    icon: <RefreshCw className="w-6 h-6" />,
    title: "Windows Update Fails Every Time",
    category: "OS Update Errors",
    description: "Fix update problems by clearing update cache, checking system date, and troubleshooting services.",
    pdfName: "windows-update-fix.pdf",
    searchTerms: ["windows", "update", "fails", "cache", "system", "date"]
  },
  {
    id: "bluetooth-problem",
    icon: <Bluetooth className="w-6 h-6" />,
    title: "Bluetooth Won't Turn On or Detect Devices",
    category: "Bluetooth Problem",
    description: "Enable Bluetooth by toggling airplane mode, reinstalling drivers, and checking device compatibility.",
    pdfName: "bluetooth-troubleshooting.pdf",
    searchTerms: ["bluetooth", "wireless", "pairing", "drivers", "airplane mode"]
  },
  {
    id: "sync-problems",
    icon: <Cloud className="w-6 h-6" />,
    title: "Files Not Syncing with OneDrive/Google Drive",
    category: "Sync Problems",
    description: "Resolve sync issues by checking sign-in status, storage quotas, and network connectivity.",
    pdfName: "cloud-sync-fix.pdf",
    searchTerms: ["sync", "onedrive", "google drive", "cloud", "files", "quota"]
  }
];
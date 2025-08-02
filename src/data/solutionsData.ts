export const solutionsData = {
  "wifi-no-internet": [
    {
      step: 1,
      title: "Check Wi-Fi Settings",
      description: "Go to Wi-Fi settings and forget/reconnect to your network. Ensure you're entering the correct password."
    },
    {
      step: 2,
      title: "Restart Your Router and Modem",
      description: "Unplug both devices for 30 seconds, then plug modem first, wait 1 minute, then plug router."
    },
    {
      step: 3,
      title: "Update Network Drivers",
      description: "Open Device Manager > Network adapters > Right-click your Wi-Fi adapter > Update driver."
    },
    {
      step: 4,
      title: "Reset Network Settings",
      description: "Open Command Prompt as admin and run: ipconfig /release, ipconfig /flushdns, ipconfig /renew"
    },
    {
      step: 5,
      title: "Check ISP Status",
      description: "Contact your Internet Service Provider to check for outages in your area."
    }
  ],
  "laptop-not-booting": [
    {
      step: 1,
      title: "Check Power Connection",
      description: "Ensure the charger is properly connected and the power LED is on. Try a different power outlet."
    },
    {
      step: 2,
      title: "Remove External Devices",
      description: "Disconnect all USB devices, external monitors, and peripherals, then try booting."
    },
    {
      step: 3,
      title: "Boot into Safe Mode",
      description: "Press F8 or Shift+F8 during startup to access Advanced Boot Options and select Safe Mode."
    },
    {
      step: 4,
      title: "Reset BIOS Settings",
      description: "Enter BIOS setup (usually F2 or Delete at startup) and reset to default settings."
    },
    {
      step: 5,
      title: "Check Hardware Connections",
      description: "Reseat RAM modules and hard drive connections. If comfortable, open the laptop and check internal connections."
    }
  ],
  "no-sound": [
    {
      step: 1,
      title: "Check Volume Settings",
      description: "Ensure volume is turned up and not muted. Check both system volume and application volume."
    },
    {
      step: 2,
      title: "Select Correct Audio Device",
      description: "Right-click speaker icon > Open Sound settings > Choose correct output device."
    },
    {
      step: 3,
      title: "Update Audio Drivers",
      description: "Open Device Manager > Sound, video and game controllers > Update audio driver."
    },
    {
      step: 4,
      title: "Run Audio Troubleshooter",
      description: "Go to Settings > Update & Security > Troubleshoot > Playing Audio > Run troubleshooter."
    },
    {
      step: 5,
      title: "Restart Audio Services",
      description: "Press Win+R, type services.msc, find Windows Audio service and restart it."
    }
  ],
  "battery-not-charging": [
    {
      step: 1,
      title: "Check Charger and Cable",
      description: "Inspect the charger for damage. Try a different power outlet and ensure all connections are secure."
    },
    {
      step: 2,
      title: "Clean Charging Port",
      description: "Use compressed air to clean the charging port of dust and debris."
    },
    {
      step: 3,
      title: "Calibrate Battery",
      description: "Drain battery completely, then charge to 100% without interruption."
    },
    {
      step: 4,
      title: "Update Battery Drivers",
      description: "Device Manager > Batteries > Right-click each battery device > Update driver."
    },
    {
      step: 5,
      title: "Check Battery Health",
      description: "Run battery report: Win+X > Command Prompt (Admin) > powercfg /batteryreport"
    }
  ],
  "auto-restart": [
    {
      step: 1,
      title: "Check for Overheating",
      description: "Feel if laptop is hot, clean vents with compressed air, ensure proper ventilation."
    },
    {
      step: 2,
      title: "Disable Automatic Restart",
      description: "Right-click This PC > Properties > Advanced system settings > Startup and Recovery > Uncheck 'Automatically restart'"
    },
    {
      step: 3,
      title: "Check Windows Updates",
      description: "Go to Settings > Update & Security > Windows Update and install pending updates."
    },
    {
      step: 4,
      title: "Run Memory Diagnostic",
      description: "Press Win+R, type mdsched.exe, select 'Restart now and check for problems'"
    },
    {
      step: 5,
      title: "Check Event Viewer",
      description: "Press Win+X > Event Viewer > Windows Logs > System to identify error patterns."
    }
  ],
  "printer-not-working": [
    {
      step: 1,
      title: "Check Printer Connections",
      description: "Ensure USB or network cable is properly connected. For wireless, verify Wi-Fi connection."
    },
    {
      step: 2,
      title: "Restart Print Spooler",
      description: "Press Win+R, type services.msc, find Print Spooler service and restart it."
    },
    {
      step: 3,
      title: "Update Printer Drivers",
      description: "Go to manufacturer's website and download latest drivers for your printer model."
    },
    {
      step: 4,
      title: "Clear Print Queue",
      description: "Open Settings > Devices > Printers & scanners > Select printer > Open queue > Cancel all documents."
    },
    {
      step: 5,
      title: "Run Printer Troubleshooter",
      description: "Settings > Update & Security > Troubleshoot > Printer > Run the troubleshooter."
    }
  ],
  "system-freezing": [
    {
      step: 1,
      title: "Close Unnecessary Programs",
      description: "Press Ctrl+Shift+Esc to open Task Manager and end tasks using high CPU or memory."
    },
    {
      step: 2,
      title: "Check Available Storage",
      description: "Ensure at least 15% free space on C: drive. Delete temporary files and unused programs."
    },
    {
      step: 3,
      title: "Update System Drivers",
      description: "Open Device Manager and update all drivers, especially graphics and chipset drivers."
    },
    {
      step: 4,
      title: "Run System File Checker",
      description: "Open Command Prompt as admin and run: sfc /scannow"
    },
    {
      step: 5,
      title: "Check for Malware",
      description: "Run full system scan with Windows Defender or your antivirus software."
    }
  ],
  "browser-slow": [
    {
      step: 1,
      title: "Clear Browser Cache",
      description: "Press Ctrl+Shift+Delete, select cache and cookies, then clear browsing data."
    },
    {
      step: 2,
      title: "Disable Extensions",
      description: "Go to browser settings > Extensions and disable all extensions, then enable one by one."
    },
    {
      step: 3,
      title: "Update Browser",
      description: "Check for browser updates in settings menu and install the latest version."
    },
    {
      step: 4,
      title: "Reset Browser Settings",
      description: "Go to browser settings > Advanced > Reset and clean up > Restore settings to original defaults."
    },
    {
      step: 5,
      title: "Check Internet Speed",
      description: "Run speed test at fast.com or speedtest.net to verify internet connection speed."
    }
  ],
  "forgot-password": [
    {
      step: 1,
      title: "Use Password Reset Option",
      description: "Click 'Forgot Password' link on login page and follow email instructions."
    },
    {
      step: 2,
      title: "Check Spam Folder",
      description: "Look for password reset email in spam/junk folder if not in inbox."
    },
    {
      step: 3,
      title: "Try Security Questions",
      description: "Answer security questions if available as alternative recovery method."
    },
    {
      step: 4,
      title: "Contact Support",
      description: "Contact customer support with account verification details for manual reset."
    },
    {
      step: 5,
      title: "Update Recovery Information",
      description: "Once reset, update recovery email and phone number to prevent future issues."
    }
  ],
  "slow-internet": [
    {
      step: 1,
      title: "Test Internet Speed",
      description: "Run speed test at speedtest.net to measure current download/upload speeds."
    },
    {
      step: 2,
      title: "Restart Router",
      description: "Unplug router for 30 seconds, then plug back in and wait for full startup."
    },
    {
      step: 3,
      title: "Check Connected Devices",
      description: "Disconnect unused devices from Wi-Fi network to reduce bandwidth usage."
    },
    {
      step: 4,
      title: "Update Network Drivers",
      description: "Open Device Manager > Network adapters > Update Wi-Fi adapter driver."
    },
    {
      step: 5,
      title: "Contact ISP",
      description: "If speed is consistently below paid plan, contact Internet Service Provider."
    }
  ],
  "software-error": [
    {
      step: 1,
      title: "Restart the Application",
      description: "Close the software completely and reopen it to clear temporary glitches."
    },
    {
      step: 2,
      title: "Run as Administrator",
      description: "Right-click software icon and select 'Run as administrator' to provide elevated permissions."
    },
    {
      step: 3,
      title: "Update the Software",
      description: "Check for software updates in Help menu or download latest version from official website."
    },
    {
      step: 4,
      title: "Reinstall the Software",
      description: "Uninstall through Control Panel, restart computer, then reinstall from original source."
    },
    {
      step: 5,
      title: "Check Compatibility",
      description: "Verify software is compatible with your Windows version and system requirements."
    }
  ],
  "storage-full": [
    {
      step: 1,
      title: "Run Disk Cleanup",
      description: "Press Win+R, type cleanmgr, select C: drive and delete temporary files."
    },
    {
      step: 2,
      title: "Uninstall Unused Programs",
      description: "Go to Settings > Apps > Apps & features and uninstall programs you don't use."
    },
    {
      step: 3,
      title: "Move Files to External Storage",
      description: "Transfer large files like videos and photos to external hard drive or cloud storage."
    },
    {
      step: 4,
      title: "Enable Storage Sense",
      description: "Settings > System > Storage > Configure Storage Sense to automatically free up space."
    },
    {
      step: 5,
      title: "Clear Browser Downloads",
      description: "Delete old files from Downloads folder and empty Recycle Bin."
    }
  ],
  "virus-detected": [
    {
      step: 1,
      title: "Disconnect from Internet",
      description: "Immediately disconnect from Wi-Fi or unplug ethernet cable to prevent data theft."
    },
    {
      step: 2,
      title: "Boot in Safe Mode",
      description: "Restart computer and press F8 repeatedly to boot in Safe Mode with Networking."
    },
    {
      step: 3,
      title: "Run Antivirus Scan",
      description: "Perform full system scan with Windows Defender or your installed antivirus software."
    },
    {
      step: 4,
      title: "Use Malware Removal Tool",
      description: "Download and run Malwarebytes or similar anti-malware tool for deep cleaning."
    },
    {
      step: 5,
      title: "Change All Passwords",
      description: "After cleaning, change passwords for all important accounts from a clean device."
    }
  ],
  "peripheral-not-working": [
    {
      step: 1,
      title: "Check Physical Connections",
      description: "Ensure USB cable is properly connected. Try different USB port or cable."
    },
    {
      step: 2,
      title: "Update Device Drivers",
      description: "Open Device Manager, find the device, right-click and select 'Update driver'."
    },
    {
      step: 3,
      title: "Restart Computer",
      description: "Restart your computer with the device connected to refresh system recognition."
    },
    {
      step: 4,
      title: "Check Device Manager",
      description: "Look for yellow warning signs in Device Manager indicating driver issues."
    },
    {
      step: 5,
      title: "Test on Another Computer",
      description: "Connect device to different computer to determine if it's a hardware issue."
    }
  ],
  "mobile-not-connecting": [
    {
      step: 1,
      title: "Enable USB Debugging",
      description: "On Android: Settings > Developer options > USB debugging. For iPhone: Trust this computer."
    },
    {
      step: 2,
      title: "Try Different USB Cable",
      description: "Use original cable or known working cable. Some cables are charge-only."
    },
    {
      step: 3,
      title: "Install Device Drivers",
      description: "Download and install official drivers from phone manufacturer's website."
    },
    {
      step: 4,
      title: "Change USB Mode",
      description: "On phone notification, select 'File Transfer' or 'MTP' instead of 'Charging only'."
    },
    {
      step: 5,
      title: "Restart Both Devices",
      description: "Restart both your phone and computer, then reconnect."
    }
  ],
  "blue-screen-error": [
    {
      step: 1,
      title: "Note Error Code",
      description: "Write down the STOP code (like 0x0000001E) shown on blue screen for troubleshooting."
    },
    {
      step: 2,
      title: "Boot in Safe Mode",
      description: "Restart and press F8 repeatedly to access Safe Mode options."
    },
    {
      step: 3,
      title: "Run Memory Test",
      description: "Press Win+R, type mdsched.exe to check for memory problems."
    },
    {
      step: 4,
      title: "Update Drivers",
      description: "In Safe Mode, open Device Manager and update all drivers, especially graphics drivers."
    },
    {
      step: 5,
      title: "System Restore",
      description: "Use System Restore to return to a point before the blue screen errors started."
    }
  ],
  "os-update-failed": [
    {
      step: 1,
      title: "Restart and Retry",
      description: "Restart computer and try the update again. Sometimes temporary glitches cause failures."
    },
    {
      step: 2,
      title: "Free Up Disk Space",
      description: "Ensure at least 20GB free space on C: drive before attempting major updates."
    },
    {
      step: 3,
      title: "Run Windows Update Troubleshooter",
      description: "Settings > Update & Security > Troubleshoot > Windows Update > Run troubleshooter."
    },
    {
      step: 4,
      title: "Reset Windows Update Components",
      description: "Run Command Prompt as admin and execute: net stop wuauserv, then restart the service."
    },
    {
      step: 5,
      title: "Manual Update Download",
      description: "Download update manually from Microsoft Update Catalog using update KB number."
    }
  ],
  "bluetooth-not-working": [
    {
      step: 1,
      title: "Check Bluetooth Status",
      description: "Ensure Bluetooth is turned on in Settings > Devices > Bluetooth & other devices."
    },
    {
      step: 2,
      title: "Restart Bluetooth Service",
      description: "Press Win+R, type services.msc, find Bluetooth Support Service and restart it."
    },
    {
      step: 3,
      title: "Update Bluetooth Drivers",
      description: "Open Device Manager > Bluetooth > Update Bluetooth radio driver."
    },
    {
      step: 4,
      title: "Reset Network Settings",
      description: "Settings > Network & Internet > Status > Network reset > Reset now."
    },
    {
      step: 5,
      title: "Remove and Re-pair Device",
      description: "Remove Bluetooth device from list, then pair it again from scratch."
    }
  ],
  "email-sync-issues": [
    {
      step: 1,
      title: "Check Internet Connection",
      description: "Verify stable internet connection and try accessing other websites."
    },
    {
      step: 2,
      title: "Verify Account Settings",
      description: "Check incoming/outgoing server settings match email provider's requirements."
    },
    {
      step: 3,
      title: "Update Email App",
      description: "Check for updates to your email application and install if available."
    },
    {
      step: 4,
      title: "Remove and Re-add Account",
      description: "Delete email account from app, then add it again with fresh settings."
    },
    {
      step: 5,
      title: "Check Server Status",
      description: "Visit email provider's status page to check for known server issues."
    }
  ]
};
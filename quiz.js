// Quiz data: lesson number -> [question, [options], index of correct option, explanation]
var QZ={
1:[["What is preventive maintenance?",["Repairing a part after it fails","Scheduled tasks done before anything fails","Replacing the whole computer","Installing new games"],1,"Preventive maintenance means cleaning, inspecting and updating on a schedule so faults are avoided."],
["What should you do before opening a computer case?",["Keep it plugged in to ground it","Switch off and unplug the power cable","Hold the power button while you work","Remove the hard drive first"],1,"Always shut down and unplug the power cable before opening the case."],
["What does an anti-static wrist strap protect against?",["Dust","Overheating","Electrostatic discharge damaging parts","Computer viruses"],2,"Static electricity can silently damage chips, so you ground yourself."],
["Which item helps remove dust from inside a computer?",["A wet cloth with water","Compressed air or a blower","A magnet","A screwdriver"],1,"Short bursts of compressed air or a blower remove dust without moisture."]],
2:[["Which part is the computer’s temporary working memory?",["CPU","RAM","SSD","PSU"],1,"RAM holds data in use and loses it when the power is off."],
["Which of these is an output device?",["Keyboard","Scanner","Monitor","Microphone"],2,"A monitor shows output. The others send data in."],
["Which port is commonly used to connect a monitor?",["HDMI","Ethernet (RJ-45)","3.5 mm audio jack","SATA"],0,"HDMI carries video to monitors and TVs."],
["What is an Ethernet (RJ-45) port used for?",["Charging a phone","Connecting to a wired network","Plugging in speakers","Attaching a mouse"],1,"Ethernet connects a computer to a wired network."]],
3:[["What does the round CR2032 battery on the motherboard keep?",["The fan speed","The clock and BIOS settings","The hard drive running","The screen brightness"],1,"The CMOS battery keeps the clock and settings when the computer is off."],
["Why can’t any CPU be fitted to any motherboard?",["The socket type must match","Colours must match","It must be the same price","It must be the same size as the case"],0,"The CPU must match the motherboard’s socket."],
["What does the power supply unit (PSU) do?",["Stores your files","Converts mains AC to low-voltage DC","Cools the CPU","Connects to the internet"],1,"The PSU converts mains AC into the DC voltages the parts use."],
["Why is thermal paste put between the CPU and the heatsink?",["To glue them together","To carry heat away better","To stop static","To make the fan quieter"],1,"It fills tiny gaps so heat passes into the heatsink."]],
4:[["Where in Windows can you quickly see the processor and installed RAM?",["Settings, System, About","The Recycle Bin","Disk Cleanup","Task Scheduler"],0,"Settings, System, About lists the processor, RAM and system type."],
["What do minimum requirements describe?",["The least a system needs to run the software","The best possible performance","The maximum RAM allowed","The cheapest computer"],0,"Minimum means it will run. Recommended gives smoother performance."],
["About how much RAM can a 32-bit operating system use?",["About 1 GB","About 4 GB","About 16 GB","About 64 GB"],1,"A 32-bit system is limited to about 4 GB, so choose 64-bit for more."],
["Which would you choose for a customer who edits video and games?",["A dedicated graphics card and a stronger PSU","Only a bigger monitor","A smaller hard drive","Less RAM"],0,"Heavy graphics work needs a dedicated graphics card and enough power."]],
5:[["What should you do first when assembling a desktop?",["Switch on the power","Prepare a clean workspace and ground yourself","Install the operating system","Close the case"],1,"A clean workspace and grounding come before handling parts."],
["Which connector should you disconnect first when opening a laptop?",["The screen cable","The battery connector","The keyboard","The speakers"],1,"Disconnect the battery first so nothing is powered while you work."],
["Which cable supplies the main power to the motherboard?",["24-pin cable","HDMI cable","USB cable","VGA cable"],0,"The 24-pin ATX connector powers the motherboard."],
["What is the start-up check a computer runs when powered on?",["POST","Backup","Format","Defrag"],0,"The power-on self-test (POST) checks the basic hardware."]],
6:[["What is a partition?",["A virus","A separate section of a drive with its own drive letter","A type of cable","A backup file"],1,"A partition is a logical section of a physical disk."],
["Which file system cannot hold a single file over 4 GB?",["NTFS","exFAT","FAT32","ext4"],2,"FAT32 limits single files to 4 GB."],
["What is the disk size limit of the MBR partition style?",["500 GB","1 TB","2 TB","10 TB"],2,"MBR supports disks up to 2 TB. Use GPT for larger disks."],
["Which command opens Disk Management in Windows?",["diskmgmt.msc","notepad.exe","calc.exe","ipconfig"],0,"Press Win + R and run diskmgmt.msc."]],
7:[["What does the 3-2-1 backup rule mean?",["3 disks, 2 PCs, 1 phone","3 copies, 2 kinds of media, 1 copy off-site","3 days, 2 weeks, 1 month","3 folders, 2 files, 1 drive"],1,"Keep three copies on two kinds of media, with one stored off-site."],
["What does an incremental backup copy?",["Everything every time","Only what changed since the last backup","Only the operating system","Only photos"],1,"Incremental backups copy only the changes since the last backup."],
["Does System Restore protect your personal files?",["Yes, fully","No, it restores Windows settings and programs","Only photos","Only documents"],1,"System Restore is not a backup of personal files."],
["How can you be sure a backup works?",["Do a test restore","Check the file size","Hope for the best","Delete the original"],0,"Restore a file to confirm the backup is usable."]],
8:[["What does one short beep at start-up usually mean?",["The power supply failed","The self-test passed","The RAM is missing","The monitor is broken"],1,"One short beep usually means POST passed."],
["A hard drive makes clicking noises. What should you do?",["Ignore it","Back up the data immediately","Format it","Open the case while it runs"],1,"Clicking often means the drive is failing, so save the data first."],
["The computer powers on but shows nothing. What should you check first?",["The monitor cable and reseat the RAM or graphics card","The keyboard","The mouse","The printer"],0,"Loose cables or RAM are common causes of no display."],
["The clock and date reset every time you switch off. What is the likely cause?",["A dead CMOS battery","A broken mouse","A full hard drive","Too many programs"],0,"Replace the CR2032 CMOS battery."]],
9:[["What must you do before cleaning inside a computer?",["Power off and unplug it","Run a virus scan","Open all programs","Remove the screen"],0,"Always power off and unplug first."],
["What protects a computer against power surges and cuts?",["A surge protector or UPS","A mouse pad","A screen cleaner","An extra keyboard"],0,"A surge protector or UPS protects against bad power."],
["What is corrective maintenance?",["Fixing a fault after it has happened","Cleaning on a schedule","Buying a new computer","Updating a wallpaper"],0,"Corrective maintenance repairs a fault that has already occurred."],
["How should you clean a screen?",["Spray liquid straight onto it","Use a microfibre cloth and screen cleaner","Use a wet towel","Use sandpaper"],1,"Use a microfibre cloth, and never spray liquid directly on the screen."]],
10:[["What should you never do with a customer’s files?",["Back them up with permission","Browse them","Leave them alone","Protect them"],1,"Protect customers’ data and privacy. Never browse their files."],
["What does a job card record for each device?",["Customer details, fault and condition on arrival","Only the price","Only the date","Only the brand"],0,"A job card tracks the customer, reported fault and the condition of the device."],
["Why offer a short warranty on repairs?",["It builds trust","It wastes money","It is required by law","It replaces the invoice"],0,"A short warranty builds customer trust."],
["What should a repair price include?",["Diagnosis, labour and parts with a margin","Only the parts","Only the diagnosis","Nothing"],0,"Charge for diagnosis, labour and parts, and give a written quote first."]]
};
function initQuiz(){
 var el=document.getElementById('quiz');if(!el)return;
 var n=+el.getAttribute('data-lesson'),qs=QZ[n];if(!qs)return;
 var score=0,done=0;
 el.className='quiz';
 el.innerHTML='<div class="qh">Quick quiz</div><p class="qs">Test yourself on this lesson. Tap an answer.</p>'+qs.map(function(q,i){
  return '<div class="qq" data-i="'+i+'"><p class="qt">'+(i+1)+'. '+q[0]+'</p>'+q[1].map(function(o,j){return '<button type="button" class="qo" data-j="'+j+'">'+o+'</button>'}).join('')+'<p class="qe" hidden></p></div>'}).join('')+'<div class="qr" hidden></div>';
 el.querySelectorAll('.qq').forEach(function(box){
  var q=qs[+box.getAttribute('data-i')],bs=box.querySelectorAll('.qo');
  bs.forEach(function(btn){btn.addEventListener('click',function(){
   if(box.classList.contains('done'))return;box.classList.add('done');
   var j=+btn.getAttribute('data-j');
   bs[q[2]].classList.add('ok');if(j!==q[2])btn.classList.add('no');else score++;
   bs.forEach(function(b){b.disabled=true});
   var e=box.querySelector('.qe');e.hidden=false;e.textContent=(j===q[2]?'Correct. ':'Not quite. ')+q[3];
   done++;
   if(done===qs.length){var r=el.querySelector('.qr');r.hidden=false;r.innerHTML='<b>You scored '+score+' out of '+qs.length+'.</b> '+(score===qs.length?'Well done!':'Review the lesson and try again.')+' <button type="button" class="qa">Try again</button>';r.querySelector('.qa').addEventListener('click',initQuiz)}
  })})
 })
}
if(document.getElementById('quiz'))initQuiz();

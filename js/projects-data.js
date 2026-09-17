const projectsData = [
  {
    "id": "1",
    "categoryId": "gas",
    "area": "15000 متر مربع",
    "client": "سعد بن زعل المطيري",
    "location": "مكة - المدينة - بعد كوبري المهد",
    "title": "محطة الاكحل",
    "imagePath": "/assets/images/portfolio/gas/gas-22.webp"
  },
  {
    "id": "2",
    "categoryId": "commercial",
    "area": "3624.85 متر مربع",
    "client": "عبد الفتاح بن عبد الرحمن بن بشير الحوفي",
    "location": "الزبير - الغابة",
    "title": "مطبخ الاعاشة",
    "imagePath": "/assets/images/portfolio/commercial/comm-45.webp"
  },
  {
    "id": "3",
    "categoryId": "hotels",
    "area": "٦٢٥,٠٠ متر مربع",
    "client": "محمد بن عبد الغني بن ابراهيم نجدي",
    "location": "الاوس - بني حارثة",
    "title": "فندق نجدي ١",
    "imagePath": "/assets/images/portfolio/commercial/comm-44.webp"
  },
  {
    "id": "4",
    "categoryId": "hotels",
    "area": "٧٥٠,٠٠ متر مربع",
    "client": "محمد بن عبد الغني بن ابراهيم نجدي",
    "location": "قناة - حي الملك فهد",
    "title": "فندق نجدي ٢",
    "imagePath": "/assets/images/portfolio/residential/res-21.webp"
  },
  {
    "id": "5",
    "categoryId": "hotels",
    "area": "٨٥٧,٥٠ متر مربع",
    "client": "محمد بن عبد الغني بن ابراهيم نجدي",
    "location": "حرة واقم - العريض",
    "title": "فندق نجدي ٣",
    "imagePath": "/assets/images/portfolio/commercial/comm-43.webp"
  },
  {
    "id": "6",
    "categoryId": "hotels",
    "area": "٢٢٨١,٥٨ متر مربع",
    "client": "عطاالله بن عواد بن عيد المطرفي الجهني",
    "location": "البيداء - الدفاع",
    "title": "فندق (المطرفي)",
    "imagePath": "/assets/images/portfolio/residential/res-34.webp"
  },
  {
    "id": "7",
    "categoryId": "hotels",
    "area": "٧٥٧,٢٠ متر مربع",
    "client": "عبد الله محمد عبد العزيز العبود",
    "location": "حرة واقم - العريض",
    "title": "فندق (العبود)",
    "imagePath": "/assets/images/portfolio/residential/res-56.webp"
  },
  {
    "id": "8",
    "categoryId": "hotels",
    "area": "٨٩٣,٤٠ متر مربع",
    "client": "سلطان بن عبد الحميد حامد الاحمدي",
    "location": "قناة - حي المبعوث",
    "title": "فندق (الاحمدي)",
    "imagePath": "/assets/images/portfolio/residential/res-53.webp"
  },
  {
    "id": "9",
    "categoryId": "hotels",
    "area": "٨٠٠,٠٠ متر مربع",
    "client": "ماجد بن مقبل بن رجاالله الصاعدي",
    "location": "حمراء الاسد - ورقان",
    "title": "فندق (الصاعدي)",
    "imagePath": "/assets/images/portfolio/residential/res-23.webp"
  },
  {
    "id": "10",
    "categoryId": "gas",
    "area": "٨٦٨١١,٦٩ متر مربع",
    "client": "ابراهيم محمد يحيى الجهيمي وشركائه",
    "location": "ابيار الماشي",
    "title": "محطة الجهيمي",
    "imagePath": "/assets/images/portfolio/gas/gas-22.webp"
  },
  {
    "id": "11",
    "categoryId": "gas",
    "area": "٣٠٠٠,١٣ متر مربع",
    "client": "أمانة منطقة المدينة المنورة",
    "location": "العقيق - حي الفريش",
    "title": "محطة الفريش",
    "imagePath": "/assets/images/portfolio/gas/gas-35.webp"
  },
  {
    "id": "12",
    "categoryId": "gas",
    "area": "٣٣٣٤,٧٨ متر مربع",
    "client": "سليمان عبد الرحمن الحماد",
    "location": "الاحساء - المنار",
    "title": "محطة الهفوف",
    "imagePath": "/assets/images/portfolio/gas/gas-24.webp"
  },
  {
    "id": "13",
    "categoryId": "gas",
    "area": "١١٦٤ متر مربع",
    "client": "ماجد الصاعدي",
    "location": "حمراء الاسد",
    "title": "محطة الصاعدي",
    "imagePath": "/assets/images/portfolio/gas/gas-17.webp"
  },
  {
    "id": "14",
    "categoryId": "gas",
    "area": "---",
    "client": "شركة فخر للاستثمار القابضة مساهمة مقفلة",
    "location": "الاحساء - الهفوف",
    "title": "محطة الإحساء",
    "imagePath": "/assets/images/portfolio/gas/gas-24.webp"
  },
  {
    "id": "15",
    "categoryId": "commercial",
    "area": "١٢١٣,٠٦ متر مربع",
    "client": "حسين بن أمين بن مهدي الشنقيطي",
    "location": "قباء - المبعوث",
    "title": "معارض تجارية",
    "imagePath": "/assets/images/portfolio/commercial/comm-22.webp"
  },
  {
    "id": "16",
    "categoryId": "commercial",
    "area": "٧٣٧,٠٤ متر مربع",
    "client": "عطا الله عواد العوفي",
    "location": "حمراء الاسد - حي ورقان",
    "title": "سوق تجاري",
    "imagePath": "/assets/images/portfolio/commercial/comm-39.webp"
  },
  {
    "id": "17",
    "categoryId": "commercial",
    "area": "٨٧٤,٨٩ متر مربع",
    "client": "عبد الوهاب عبد الله محمود المقيبي",
    "location": "تيم - حي العاقول",
    "title": "مطعم العاقول",
    "imagePath": "/assets/images/portfolio/commercial/comm-9.webp"
  },
  {
    "id": "18",
    "categoryId": "residential",
    "area": "٨٦٩,١٨ متر مربع",
    "client": "تركي ماضي ماجد السبيعي",
    "location": "الجرف - العيون",
    "title": "مكاتب إدارية",
    "imagePath": "/assets/images/portfolio/commercial/comm-24.webp"
  },
  {
    "id": "19",
    "categoryId": "commercial",
    "area": "٤٤٠ متر مربع",
    "client": "عطا الله عواد العوفي",
    "location": "حمراء الاسد - حي ورقان",
    "title": "ورشة صيانة",
    "imagePath": "/assets/images/portfolio/commercial/comm-5.webp"
  },
  {
    "id": "20",
    "categoryId": "residential",
    "area": "٥٥٧,٣٠ متر مربع",
    "client": "مازن بن مرسي بن مفرج الصاعدي",
    "location": "الاوس - بني الحارث",
    "title": "عمارة شقق",
    "imagePath": "/assets/images/portfolio/residential/res-2.webp"
  },
  {
    "id": "21",
    "categoryId": "residential",
    "area": "٥٧٣,٢٨ متر مربع",
    "client": "مازن بن مرسي بن مفرج الصاعدي",
    "location": "الاوس - بني الحارث",
    "title": "عمارة شقق ٢",
    "imagePath": "/assets/images/portfolio/residential/res-40.webp"
  },
  {
    "id": "22",
    "categoryId": "villas",
    "area": "---",
    "client": "---",
    "location": "---",
    "title": "فيلا سكنية",
    "imagePath": "/assets/images/portfolio/villas/villa-22.webp"
  }
];

// Multi-Language Support - Bengali/English Toggle
// Language switcher with localStorage persistence

document.addEventListener('DOMContentLoaded', function() {
    
    // ============================================
    // TRANSLATION DATA
    // ============================================
    
    const translations = {
        en: {
            // Navbar
            navHome: "Home",
            navAbout: "About",
            navServices: "Services",
            navPortfolio: "Portfolio",
            navBlog: "Blog",
            navAchievements: "Achievements",
            navContact: "Contact",
            
            // Hero Section
            heroTitle: "Transform Your Digital Presence with Expert Solutions",
            heroSubtitle: "Professional Digital Marketer, Web Developer & Social Media Security Expert",
            heroExp: "5+ Years Experience",
            heroClients: "100+ Satisfied Clients",
            heroSecurity: "Security Specialist",
            heroBtn1: "Get Started",
            heroBtn2: "View Portfolio",
            heroRole: "Digital Marketing Expert",
            
            // About Section
            aboutTitle: "About Me",
            aboutSubtitle: "",
            aboutHeading: "Turning Digital Ideas Into Real Results",
            aboutPara1: "I am Professor Imamul Islam, a passionate Digital Marketer, Web Developer, and Social Media Security Expert from Bangladesh. With over 5 years of experience, I help businesses, individuals, and organizations grow their online presence, build secure websites, and protect their digital assets.",
            aboutPara2: "Throughout my career, I have successfully managed SEO campaigns, social media marketing, website development projects, and security audits for a variety of clients. I also provide professional training to help others understand the rapidly evolving digital landscape.",
            aboutPara3: "My mission is to empower businesses and individuals to leverage technology effectively, creatively, and safely. Whether it's creating a high-converting website, running impactful marketing campaigns, or securing online accounts, I ensure every solution is tailored, innovative, and results-driven.",
            aboutSkillsTitle: "Core Skills",
            aboutFunFact: "Fun Fact",
            aboutFunFactText: "When I'm not coding or strategizing digital campaigns, I enjoy learning about AI, cybersecurity, and emerging tech trends, and sharing my knowledge with students and professionals.",
            
            // Skills
            skillDigitalMarketing: "Digital Marketing",
            skillDigitalMarketingDesc: "SEO, SEM, Social Media Ads, Content Strategy",
            skillWebDev: "Web Development",
            skillWebDevDesc: "HTML, CSS, JavaScript, WordPress, Responsive Design",
            skillSecurity: "Social Media Security",
            skillSecurityDesc: "Account Recovery, Online Safety, Reputation Management",
            skillTraining: "Training & Consultancy",
            skillTrainingDesc: "Workshops, Online Courses, Personal Mentoring",
            
            // Services Section
            servicesTitle: "What I Offer",
            servicesSubtitle: "Comprehensive digital solutions tailored to elevate your business",
            
            service1Title: "Web Development",
            service1Desc: "Custom websites and web applications built with modern technologies. From responsive design to complex e-commerce platforms, I create digital experiences that convert visitors into customers.",
            service1Item1: "Responsive Web Design",
            service1Item2: "E-commerce Development",
            service1Item3: "Custom Web Applications",
            service1Item4: "Website Optimization",
            
            service2Title: "Digital Marketing",
            service2Desc: "Strategic digital marketing campaigns that drive traffic, generate leads, and increase revenue. I use data-driven approaches to maximize your ROI across all digital channels.",
            service2Item1: "Search Engine Optimization (SEO)",
            service2Item2: "Pay-Per-Click Advertising (PPC)",
            service2Item3: "Social Media Marketing",
            service2Item4: "Content Marketing Strategy",
            
            service3Title: "Social Media Security",
            service3Desc: "Protect your digital assets and maintain your online reputation with comprehensive security solutions. I help businesses safeguard their social media presence and sensitive data.",
            service3Item1: "Social Media Account Security",
            service3Item2: "Data Protection Strategies",
            service3Item3: "Cybersecurity Consulting",
            service3Item4: "Risk Assessment & Mitigation",
            
            service4Title: "Branding & Design",
            service4Desc: "Create a memorable brand identity that resonates with your target audience. From logo design to complete brand guidelines, I help establish your unique market position.",
            service4Item1: "Brand Identity Development",
            service4Item2: "Logo & Visual Design",
            service4Item3: "Brand Strategy Consulting",
            service4Item4: "Marketing Collateral Design",
            
            service5Title: "Training & Workshops",
            service5Desc: "Empower your team with cutting-edge digital skills through customized training programs. I offer workshops on digital marketing, web development, and cybersecurity best practices.",
            service5Item1: "Digital Marketing Training",
            service5Item2: "Web Development Courses",
            service5Item3: "Social Media Management",
            service5Item4: "Personal Coaching Sessions",
            
            // Portfolio Section
            portfolioTitle: "Portfolio",
            portfolioSubtitle: "Showcasing my expertise through professional projects",
            portfolioIntro: "Click on any project to view detailed information about my skills and approach.",
            // Portfolio Category Labels
            categoryWebDev: "Web Development",
            categoryMarketing: "Digital Marketing",
            categorySecurity: "Security",
            categoryHybrid: "Marketing + Security",
            
            project1Title: "Responsive E-commerce Website",
            project1Desc: "Fully responsive e-commerce platform with modern UI/UX, shopping cart, and secure payments.",
            project1Tech1: "HTML5",
            project1Tech2: "CSS3",
            project1Tech3: "JavaScript",
            project1Tech4: "WordPress",
            project1Link: "View Project",
            
            project2Title: "SEO & Social Media Campaign",
            project2Desc: "Comprehensive marketing strategy combining SEO, social media ads, and content marketing.",
            project2Tech1: "Google Analytics",
            project2Tech2: "Facebook Ads",
            project2Tech3: "SEO",
            project2Tech4: "Content",
            project2Link: "View Project",
            
            project3Title: "Social Media Security Audit",
            project3Desc: "Security framework for vulnerability detection, 2FA implementation, and account recovery.",
            project3Tech1: "Security Analysis",
            project3Tech2: "2FA",
            project3Tech3: "Recovery",
            project3Tech4: "Monitoring",
            project3Link: "View Project",
            
            project4Title: "Business Portfolio Website",
            project4Desc: "Professional WordPress site with custom themes, SEO optimization, and social integration.",
            project4Tech1: "WordPress",
            project4Tech2: "PHP",
            project4Tech3: "MySQL",
            project4Tech4: "SEO",
            project4Link: "View Project",
            
            project5Title: "Secure Brand Management",
            project5Desc: "Integrated solution for brand reputation management with social media security measures.",
            project5Tech1: "Brand Strategy",
            project5Tech2: "Security",
            project5Tech3: "Crisis Mgmt",
            project5Tech4: "Monitoring",
            project5Link: "View Project",
            
            // Blog Section
            blogTitle: "Latest Insights",
            blogSubtitle: "Expert advice and insights on digital marketing, web development, and security",
            blogReadMore: "Read More",
            // Blog dates
            blogDateOct2024: "October 2024",
            blogDateSep2024: "September 2024",
            blogDateAug2024: "August 2024",
            blogDateJul2024: "July 2024",
            blogDateJun2024: "June 2024",
            
            blogCategory1: "Digital Marketing",
            blogCategory2: "Web Development",
            blogCategory3: "Social Media Security",
            blogCategory4: "Digital Strategy",
            blogCategory5: "E-commerce",
            // Social platform names
            socialLinkedIn: "LinkedIn",
            socialTwitter: "Twitter",
            socialFacebook: "Facebook",
            socialInstagram: "Instagram",
            socialYouTube: "YouTube",
            socialGitHub: "GitHub",
            
            blogPost1Title: "The Future of SEO: AI and Machine Learning Impact",
            blogPost1Desc: "Explore how artificial intelligence and machine learning are revolutionizing search engine optimization strategies and what businesses need to know to stay ahead in 2024 and beyond.",
            
            blogPost2Title: "Building Secure Web Applications: Best Practices Guide",
            blogPost2Desc: "A comprehensive guide to implementing security best practices in modern web development, covering everything from authentication to data protection and vulnerability prevention.",
            
            blogPost3Title: "Protecting Your Business from Social Media Threats",
            blogPost3Desc: "Learn about the latest social media security threats facing businesses today and discover practical strategies to protect your brand reputation and sensitive information online.",
            
            blogPost4Title: "Digital Transformation in Bangladesh: Opportunities and Challenges",
            blogPost4Desc: "An in-depth analysis of the digital transformation landscape in Bangladesh, highlighting emerging opportunities for businesses and the challenges they must overcome.",
            
            blogPost5Title: "Conversion Rate Optimization: Turning Visitors into Customers",
            blogPost5Desc: "Discover proven techniques and strategies to optimize your website's conversion rate, including A/B testing methodologies, user experience improvements, and psychological triggers.",
            
            // Achievements Section
            achievementsTitle: "Achievements & Recognition",
            achievementsSubtitle: "Celebrating milestones and professional recognition",
            
            achievement1Title: "Digital Marketing Excellence",
            achievement1Desc: "Recognized for outstanding achievement in digital marketing campaigns and strategy development",
            
            achievement2Title: "Google Certified Professional",
            achievement2Desc: "Certified in Google Ads, Analytics, and Digital Marketing strategies",
            
            achievement3Title: "International Speaker",
            achievement3Desc: "Keynote speaker at 15+ international conferences on digital marketing and cybersecurity",
            
            achievement4Title: "Academic Excellence",
            achievement4Desc: "PhD in Computer Science with specialization in Cybersecurity and Digital Systems",
            
            achievement5Title: "Community Leader",
            achievement5Desc: "Founded Bangladesh Cybersecurity Forum with 5000+ active members",
            
            achievement6Title: "Published Author",
            achievement6Desc: "Author of \"Digital Security in the Modern Age\" - bestselling cybersecurity guide",
            
            // Contact Section
            contactTitle: "Let's Connect",
            contactSubtitle: "Ready to transform your digital presence? I'm here to help you succeed",
            
            contactEmail: "Email Me",
            contactEmailLink: "Send Email",
            
            contactPhone: "Call Me",
            contactPhoneLink: "Start Call",
            
            contactLocation: "Visit Me",
            contactLocationText: "Paikgacha, Khulna",
            contactLocationCountry: "Bangladesh",
            contactLocationLink: "View Map",
            
            contactSocialTitle: "Follow My Journey",
            contactSocialDesc: "Stay connected and get daily insights on digital marketing, web development, and tech trends",
            formSending: "Sending...",
            formMsgSent: "Message sent successfully! I'll get back to you soon.",
            formFieldRequired: "This field is required",
            formInvalidEmail: "Please enter a valid email address",
            
            // Footer
            footerAbout: "Transforming businesses through innovative digital solutions and strategic expertise.",
            footerQuickLinks: "Quick Links",
            footerServices: "Services",
            footerServiceWeb: "Web Development",
            footerServiceMarketing: "Digital Marketing",
            footerServiceSecurity: "Security Consulting",
            footerServiceTraining: "Training",
            footerRights: "All rights reserved."
        },
        
        bn: {
            // Navbar
            navHome: "হোম",
            navAbout: "আমার সম্পর্কে",
            navServices: "সেবাসমূহ",
            navPortfolio: "পোর্টফোলিও",
            navBlog: "ব্লগ",
            navAchievements: "অর্জনসমূহ",
            navContact: "যোগাযোগ",
            
            // Hero Section
            heroTitle: "বিশেষজ্ঞ সমাধানের মাধ্যমে আপনার ডিজিটাল উপস্থিতি রূপান্তরিত করুন",
            heroSubtitle: "পেশাদার ডিজিটাল মার্কেটার, ওয়েব ডেভেলপার এবং সোশ্যাল মিডিয়া সিকিউরিটি বিশেষজ্ঞ",
            heroExp: "৫+ বছরের অভিজ্ঞতা",
            heroClients: "১০০+ সন্তুষ্ট ক্লায়েন্ট",
            heroSecurity: "সিকিউরিটি বিশেষজ্ঞ",
            heroBtn1: "শুরু করুন",
            heroBtn2: "পোর্টফোলিও দেখুন",
            heroRole: "ডিজিটাল মার্কেটিং এক্সপার্ট",
            
            // About Section
            aboutTitle: "আমার সম্পর্কে",
            aboutSubtitle: "",
            aboutHeading: "ডিজিটাল ধারণাকে বাস্তব ফলাফলে পরিণত করা",
            aboutPara1: "আমি প্রফেসর ইমামুল ইসলাম, বাংলাদেশের একজন উৎসাহী ডিজিটাল মার্কেটার, ওয়েব ডেভেলপার এবং সোশ্যাল মিডিয়া সিকিউরিটি বিশেষজ্ঞ। ৫ বছরেরও বেশি অভিজ্ঞতা নিয়ে, আমি ব্যবসা, ব্যক্তি এবং প্রতিষ্ঠানগুলিকে তাদের অনলাইন উপস্থিতি বৃদ্ধি, নিরাপদ ওয়েবসাইট তৈরি এবং ডিজিটাল সম্পদ সুরক্ষিত করতে সহায়তা করি।",
            aboutPara2: "আমার ক্যারিয়ার জুড়ে, আমি বিভিন্ন ক্লায়েন্টের জন্য এসইও ক্যাম্পেইন, সোশ্যাল মিডিয়া মার্কেটিং, ওয়েবসাইট ডেভেলপমেন্ট প্রজেক্ট এবং সিকিউরিটি অডিট সফলভাবে পরিচালনা করেছি। আমি অন্যদের দ্রুত বিকশিত ডিজিটাল ল্যান্ডস্কেপ বুঝতে সাহায্য করার জন্য পেশাদার প্রশিক্ষণও প্রদান করি।",
            aboutPara3: "আমার লক্ষ্য হল ব্যবসা এবং ব্যক্তিদের প্রযুক্তি কার্যকরভাবে, সৃজনশীলভাবে এবং নিরাপদভাবে ব্যবহার করতে ক্ষমতায়ন করা। উচ্চ-রূপান্তরকারী ওয়েবসাইট তৈরি করা, প্রভাবশালী মার্কেটিং ক্যাম্পেইন চালানো বা অনলাইন অ্যাকাউন্ট সুরক্ষিত করা - আমি নিশ্চিত করি যে প্রতিটি সমাধান কাস্টমাইজড, উদ্ভাবনী এবং ফলাফলমুখী।",
            aboutSkillsTitle: "মূল দক্ষতা",
            aboutFunFact: "মজার তথ্য",
            aboutFunFactText: "যখন আমি কোডিং বা ডিজিটাল ক্যাম্পেইন পরিকল্পনা করি না, তখন আমি এআই, সাইবার সিকিউরিটি এবং উদীয়মান প্রযুক্তি ট্রেন্ড সম্পর্কে শেখা এবং শিক্ষার্থী ও পেশাদারদের সাথে আমার জ্ঞান ভাগ করে নেওয়া উপভোগ করি।",
            
            // Skills
            skillDigitalMarketing: "ডিজিটাল মার্কেটিং",
            skillDigitalMarketingDesc: "এসইও, এসইএম, সোশ্যাল মিডিয়া অ্যাড, কন্টেন্ট স্ট্র্যাটেজি",
            skillWebDev: "ওয়েব ডেভেলপমেন্ট",
            skillWebDevDesc: "HTML, CSS, JavaScript, WordPress, রেসপন্সিভ ডিজাইন",
            skillSecurity: "সোশ্যাল মিডিয়া সিকিউরিটি",
            skillSecurityDesc: "অ্যাকাউন্ট রিকভারি, অনলাইন নিরাপত্তা, সুনাম ব্যবস্থাপনা",
            skillTraining: "প্রশিক্ষণ এবং পরামর্শ",
            skillTrainingDesc: "ওয়ার্কশপ, অনলাইন কোর্স, ব্যক্তিগত মেন্টরিং",
            
            // Services Section
            servicesTitle: "আমি যা অফার করি",
            servicesSubtitle: "আপনার ব্যবসাকে উন্নত করার জন্য ব্যাপক ডিজিটাল সমাধান",
            
            service1Title: "ওয়েব ডেভেলপমেন্ট",
            service1Desc: "আধুনিক প্রযুক্তি দিয়ে তৈরি কাস্টম ওয়েবসাইট এবং ওয়েব অ্যাপ্লিকেশন। রেসপন্সিভ ডিজাইন থেকে জটিল ই-কমার্স প্ল্যাটফর্ম পর্যন্ত, আমি ডিজিটাল অভিজ্ঞতা তৈরি করি যা দর্শকদের গ্রাহকে রূপান্তরিত করে।",
            service1Item1: "রেসপন্সিভ ওয়েব ডিজাইন",
            service1Item2: "ই-কমার্স ডেভেলপমেন্ট",
            service1Item3: "কাস্টম ওয়েব অ্যাপ্লিকেশন",
            service1Item4: "ওয়েবসাইট অপটিমাইজেশন",
            
            service2Title: "ডিজিটাল মার্কেটিং",
            service2Desc: "কৌশলগত ডিজিটাল মার্কেটিং ক্যাম্পেইন যা ট্রাফিক চালিত করে, লিড তৈরি করে এবং রাজস্ব বৃদ্ধি করে। আমি সমস্ত ডিজিটাল চ্যানেল জুড়ে আপনার ROI সর্বাধিক করতে ডেটা-চালিত পদ্ধতি ব্যবহার করি।",
            service2Item1: "সার্চ ইঞ্জিন অপটিমাইজেশন (SEO)",
            service2Item2: "পে-পার-ক্লিক বিজ্ঞাপন (PPC)",
            service2Item3: "সোশ্যাল মিডিয়া মার্কেটিং",
            service2Item4: "কন্টেন্ট মার্কেটিং স্ট্র্যাটেজি",
            
            service3Title: "সোশ্যাল মিডিয়া সিকিউরিটি",
            service3Desc: "ব্যাপক সিকিউরিটি সমাধান দিয়ে আপনার ডিজিটাল সম্পদ রক্ষা করুন এবং আপনার অনলাইন সুনাম বজায় রাখুন। আমি ব্যবসাগুলিকে তাদের সোশ্যাল মিডিয়া উপস্থিতি এবং সংবেদনশীল ডেটা সুরক্ষিত করতে সহায়তা করি।",
            service3Item1: "সোশ্যাল মিডিয়া অ্যাকাউন্ট সিকিউরিটি",
            service3Item2: "ডেটা সুরক্ষা কৌশল",
            service3Item3: "সাইবার সিকিউরিটি পরামর্শ",
            service3Item4: "ঝুঁকি মূল্যায়ন এবং প্রশমন",
            
            service4Title: "ব্র্যান্ডিং এবং ডিজাইন",
            service4Desc: "একটি স্মরণীয় ব্র্যান্ড পরিচয় তৈরি করুন যা আপনার লক্ষ্য দর্শকদের সাথে অনুরণিত হয়। লোগো ডিজাইন থেকে সম্পূর্ণ ব্র্যান্ড গাইডলাইন পর্যন্ত, আমি আপনার অনন্য বাজার অবস্থান প্রতিষ্ঠা করতে সাহায্য করি।",
            service4Item1: "ব্র্যান্ড আইডেন্টিটি ডেভেলপমেন্ট",
            service4Item2: "লোগো এবং ভিজ্যুয়াল ডিজাইন",
            service4Item3: "ব্র্যান্ড স্ট্র্যাটেজি পরামর্শ",
            service4Item4: "মার্কেটিং উপকরণ ডিজাইন",
            
            service5Title: "প্রশিক্ষণ এবং ওয়ার্কশপ",
            service5Desc: "কাস্টমাইজড প্রশিক্ষণ প্রোগ্রামের মাধ্যমে আপনার দলকে অত্যাধুনিক ডিজিটাল দক্ষতা দিয়ে ক্ষমতায়ন করুন। আমি ডিজিটাল মার্কেটিং, ওয়েব ডেভেলপমেন্ট এবং সাইবার সিকিউরিটি সর্বোত্তম অনুশীলনের উপর ওয়ার্কশপ অফার করি।",
            service5Item1: "ডিজিটাল মার্কেটিং প্রশিক্ষণ",
            service5Item2: "ওয়েব ডেভেলপমেন্ট কোর্স",
            service5Item3: "সোশ্যাল মিডিয়া ম্যানেজমেন্ট",
            service5Item4: "ব্যক্তিগত কোচিং সেশন",
            
            // Portfolio Section
            portfolioTitle: "পোর্টফোলিও",
            portfolioSubtitle: "পেশাদার প্রকল্পের মাধ্যমে আমার দক্ষতা প্রদর্শন",
            portfolioIntro: "আমার দক্ষতা এবং পদ্ধতি সম্পর্কে বিস্তারিত তথ্য দেখতে যেকোনো প্রকল্পে ক্লিক করুন।",
            // Portfolio Category Labels
            categoryWebDev: "ওয়েব ডেভেলপমেন্ট",
            categoryMarketing: "ডিজিটাল মার্কেটিং",
            categorySecurity: "সিকিউরিটি",
            categoryHybrid: "মার্কেটিং + সিকিউরিটি",
            
            // Portfolio Projects
            project1Title: "রেসপন্সিভ ই-কমার্স ওয়েবসাইট",
            project1Desc: "আধুনিক UI/UX, শপিং কার্ট এবং নিরাপদ পেমেন্ট সহ সম্পূর্ণ রেসপন্সিভ ই-কমার্স প্ল্যাটফর্ম।",
            project1Tech1: "HTML5",
            project1Tech2: "CSS3",
            project1Tech3: "JavaScript",
            project1Tech4: "WordPress",
            project1Link: "প্রকল্প দেখুন",
            
            project2Title: "এসইও এবং সোশ্যাল মিডিয়া ক্যাম্পেইন",
            project2Desc: "এসইও, সোশ্যাল মিডিয়া বিজ্ঞাপন এবং কন্টেন্ট মার্কেটিং একত্রিত করে ব্যাপক মার্কেটিং কৌশল।",
            project2Tech1: "গুগল অ্যানালিটিক্স",
            project2Tech2: "ফেসবুক বিজ্ঞাপন",
            project2Tech3: "SEO",
            project2Tech4: "কন্টেন্ট",
            project2Link: "প্রকল্প দেখুন",
            
            project3Title: "সোশ্যাল মিডিয়া সিকিউরিটি অডিট",
            project3Desc: "দুর্বলতা সনাক্তকরণ, 2FA বাস্তবায়ন এবং অ্যাকাউন্ট পুনরুদ্ধারের জন্য সিকিউরিটি ফ্রেমওয়ার্ক।",
            project3Tech1: "সিকিউরিটি বিশ্লেষণ",
            project3Tech2: "2FA",
            project3Tech3: "পুনরুদ্ধার",
            project3Tech4: "মনিটরিং",
            project3Link: "প্রকল্প দেখুন",
            
            project4Title: "ব্যবসায়িক পোর্টফোলিও ওয়েবসাইট",
            project4Desc: "কাস্টম থিম, এসইও অপটিমাইজেশন এবং সোশ্যাল ইন্টিগ্রেশন সহ পেশাদার ওয়ার্ডপ্রেস সাইট।",
            project4Tech1: "WordPress",
            project4Tech2: "PHP",
            project4Tech3: "MySQL",
            project4Tech4: "SEO",
            project4Link: "প্রকল্প দেখুন",
            
            project5Title: "সুরক্ষিত ব্র্যান্ড ম্যানেজমেন্ট",
            project5Desc: "সোশ্যাল মিডিয়া সিকিউরিটি ব্যবস্থা সহ ব্র্যান্ড সুনাম ব্যবস্থাপনার জন্য সমন্বিত সমাধান।",
            project5Tech1: "ব্র্যান্ড স্ট্র্যাটেজি",
            project5Tech2: "সিকিউরিটি",
            project5Tech3: "ক্রাইসিস ম্যানেজমেন্ট",
            project5Tech4: "মনিটরিং",
            project5Link: "প্রকল্প দেখুন",
            
            // Blog Section
            blogTitle: "সর্বশেষ অন্তর্দৃষ্টি",
            blogSubtitle: "ডিজিটাল মার্কেটিং, ওয়েব ডেভেলপমেন্ট এবং সিকিউরিটিতে বিশেষজ্ঞ পরামর্শ এবং অন্তর্দৃষ্টি",
            blogReadMore: "আরও পড়ুন",
            // Blog dates
            blogDateOct2024: "অক্টোবর ২০২৪",
            blogDateSep2024: "সেপ্টেম্বর ২০২৪",
            blogDateAug2024: "আগস্ট ২০২৪",
            blogDateJul2024: "জুলাই ২০২৪",
            blogDateJun2024: "জুন ২০২৪",
            
            blogCategory1: "ডিজিটাল মার্কেটিং",
            blogCategory2: "ওয়েব ডেভেলপমেন্ট",
            blogCategory3: "সোশ্যাল মিডিয়া সিকিউরিটি",
            blogCategory4: "ডিজিটাল স্ট্র্যাটেজি",
            blogCategory5: "ই-কমার্স",
            // Social platform names
            socialLinkedIn: "লিংকডইন",
            socialTwitter: "টুইটার",
            socialFacebook: "ফেসবুক",
            socialInstagram: "ইনস্টাগ্রাম",
            socialYouTube: "ইউটিউব",
            socialGitHub: "গিটহাব",
            
            blogPost1Title: "SEO এর ভবিষ্যৎ: AI এবং মেশিন লার্নিং প্রভাব",
            blogPost1Desc: "কৃত্রিম বুদ্ধিমত্তা এবং মেশিন লার্নিং কীভাবে সার্চ ইঞ্জিন অপটিমাইজেশন কৌশলকে বিপ্লব ঘটাচ্ছে এবং 2024 এবং তার পরেও এগিয়ে থাকতে ব্যবসাগুলিকে কী জানতে হবে তা অন্বেষণ করুন।",
            
            blogPost2Title: "নিরাপদ ওয়েব অ্যাপ্লিকেশন তৈরি: সেরা অনুশীলন গাইড",
            blogPost2Desc: "আধুনিক ওয়েব ডেভেলপমেন্টে সিকিউরিটি সর্বোত্তম অনুশীলন বাস্তবায়নের একটি ব্যাপক নির্দেশিকা, প্রমাণীকরণ থেকে ডেটা সুরক্ষা এবং দুর্বলতা প্রতিরোধ পর্যন্ত সবকিছু কভার করে।",
            
            blogPost3Title: "সোশ্যাল মিডিয়া হুমকি থেকে আপনার ব্যবসা রক্ষা করা",
            blogPost3Desc: "আজ ব্যবসাগুলির মুখোমুখি হওয়া সর্বশেষ সোশ্যাল মিডিয়া সিকিউরিটি হুমকি সম্পর্কে জানুন এবং অনলাইনে আপনার ব্র্যান্ড সুনাম এবং সংবেদনশীল তথ্য রক্ষা করার জন্য ব্যবহারিক কৌশলগুলি আবিষ্কার করুন।",
            
            blogPost4Title: "বাংলাদেশে ডিজিটাল রূপান্তর: সুযোগ এবং চ্যালেঞ্জ",
            blogPost4Desc: "বাংলাদেশে ডিজিটাল রূপান্তর ল্যান্ডস্কেপের একটি গভীর বিশ্লেষণ, ব্যবসার জন্য উদীয়মান সুযোগ এবং তাদের অতিক্রম করতে হবে এমন চ্যালেঞ্জগুলি তুলে ধরে।",
            
            blogPost5Title: "কনভার্শন রেট অপটিমাইজেশন: দর্শকদের গ্রাহকে পরিণত করা",
            blogPost5Desc: "A/B টেস্টিং পদ্ধতি, ব্যবহারকারীর অভিজ্ঞতা উন্নতি এবং মনস্তাত্ত্বিক ট্রিগার সহ আপনার ওয়েবসাইটের কনভার্শন রেট অপ্টিমাইজ করার প্রমাণিত কৌশল এবং কৌশলগুলি আবিষ্কার করুন।",
            
            // Achievements Section
            achievementsTitle: "অর্জন এবং স্বীকৃতি",
            achievementsSubtitle: "মাইলফলক এবং পেশাদার স্বীকৃতি উদযাপন",
            
            achievement1Title: "ডিজিটাল মার্কেটিং এক্সিলেন্স",
            achievement1Desc: "ডিজিটাল মার্কেটিং ক্যাম্পেইন এবং কৌশল উন্নয়নে অসামান্য অর্জনের জন্য স্বীকৃত",
            
            achievement2Title: "গুগল সার্টিফাইড প্রফেশনাল",
            achievement2Desc: "গুগল অ্যাডস, অ্যানালিটিক্স এবং ডিজিটাল মার্কেটিং কৌশলে সার্টিফাইড",
            
            achievement3Title: "আন্তর্জাতিক বক্তা",
            achievement3Desc: "ডিজিটাল মার্কেটিং এবং সাইবার সিকিউরিটিতে ১৫+ আন্তর্জাতিক কনফারেন্সে মূল বক্তা",
            
            achievement4Title: "একাডেমিক এক্সিলেন্স",
            achievement4Desc: "সাইবার সিকিউরিটি এবং ডিজিটাল সিস্টেমে বিশেষীকরণ সহ কম্পিউটার সায়েন্সে পিএইচডি",
            
            achievement5Title: "কমিউনিটি লিডার",
            achievement5Desc: "৫০০০+ সক্রিয় সদস্য সহ বাংলাদেশ সাইবার সিকিউরিটি ফোরাম প্রতিষ্ঠা করেছেন",
            
            achievement6Title: "প্রকাশিত লেখক",
            achievement6Desc: "\"ডিজিটাল সিকিউরিটি ইন দ্য মডার্ন এজ\" এর লেখক - বেস্টসেলিং সাইবার সিকিউরিটি গাইড",
            
            // Contact Section
            contactTitle: "সংযুক্ত হোন",
            contactSubtitle: "আপনার ডিজিটাল উপস্থিতি রূপান্তরিত করতে প্রস্তুত? আমি আপনাকে সফল হতে সাহায্য করতে এখানে আছি",
            
            contactEmail: "ইমেইল করুন",
            contactEmailLink: "ইমেইল পাঠান",
            
            contactPhone: "ফোন করুন",
            contactPhoneLink: "কল শুরু করুন",
            
            contactLocation: "আমার সাথে দেখা করুন",
            contactLocationText: "পাইকগাছা, খুলনা",
            contactLocationCountry: "বাংলাদেশ",
            contactLocationLink: "ম্যাপ দেখুন",
            
            contactSocialTitle: "আমার যাত্রা অনুসরণ করুন",
            contactSocialDesc: "সংযুক্ত থাকুন এবং ডিজিটাল মার্কেটিং, ওয়েব ডেভেলপমেন্ট এবং প্রযুক্তি ট্রেন্ডে দৈনিক অন্তর্দৃষ্টি পান",
            formSending: "পাঠানো হচ্ছে...",
            formMsgSent: "বার্তা সফলভাবে পাঠানো হয়েছে! আমি শীঘ্রই আপনার সাথে যোগাযোগ করব।",
            formFieldRequired: "এই ঘরটি পূরণ করা আবশ্যক",
            formInvalidEmail: "অনুগ্রহ করে একটি বৈধ ইমেইল ঠিকানা লিখুন",
            
            // Footer
            footerAbout: "উদ্ভাবনী ডিজিটাল সমাধান এবং কৌশলগত দক্ষতার মাধ্যমে ব্যবসা রূপান্তরিত করা।",
            footerQuickLinks: "দ্রুত লিঙ্ক",
            footerServices: "সেবাসমূহ",
            footerServiceWeb: "ওয়েব ডেভেলপমেন্ট",
            footerServiceMarketing: "ডিজিটাল মার্কেটিং",
            footerServiceSecurity: "সিকিউরিটি পরামর্শ",
            footerServiceTraining: "প্রশিক্ষণ",
            footerRights: "সর্বস্বত্ব সংরক্ষিত।"
        }
    };
    
    // ============================================
    // LANGUAGE MANAGEMENT
    // ============================================
    
    // Prefer URL param ?lang=bn|en, fallback to localStorage, then default 'en'
    function getLangFromUrl() {
        const params = new URLSearchParams(window.location.search);
        const lang = params.get('lang');
        return (lang === 'bn' || lang === 'en') ? lang : null;
    }

    let currentLang = getLangFromUrl() || localStorage.getItem('preferredLanguage') || 'en';
    
    // Apply translations to page
    function applyTranslations(lang) {
        const t = translations[lang];
        
        // Update all elements with data-translate attribute
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (t[key]) {
                // Check if it's an input placeholder
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = t[key];
                } else {
                    element.textContent = t[key];
                }
            }
        });
        
        // Update language toggle button
        updateLanguageButton(lang);
        
        // Save preference
        localStorage.setItem('preferredLanguage', lang);
        currentLang = lang;

        // Keep URL in sync without reloading
        try {
            const url = new URL(window.location.href);
            if (lang === 'en') {
                url.searchParams.delete('lang');
            } else {
                url.searchParams.set('lang', lang);
            }
            window.history.replaceState({}, '', url.toString());
        } catch (e) {
            // no-op
        }
        
        // Update HTML lang attribute
        document.documentElement.lang = lang;
        
        console.log(`✅ Language changed to: ${lang === 'en' ? 'English' : 'বাংলা'}`);

        // Notify other scripts (e.g., typing effect) that language text has been applied
        try {
            window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
        } catch (e) {
            // no-op
        }
    }
    
    // Update language button text
    function updateLanguageButton(lang) {
        const langButton = document.querySelector('.language-toggle');
        if (langButton) {
            const textSpan = langButton.querySelector('.lang-text');
            const iconSpan = langButton.querySelector('.lang-icon');
            
            if (lang === 'en') {
                textSpan.textContent = 'বাংলা';
                iconSpan.textContent = '🇧🇩';
            } else {
                textSpan.textContent = 'English';
                iconSpan.textContent = '🇬🇧';
            }
        }
    }
    
    // Toggle language
    function toggleLanguage() {
        const newLang = currentLang === 'en' ? 'bn' : 'en';
        applyTranslations(newLang);
    }
    
    // Expose translation helpers globally
    try {
        window.getCurrentLanguage = function() { return currentLang; };
        window.translateText = function(key) {
            try {
                const lang = currentLang;
                return (translations[lang] && translations[lang][key]) || key;
            } catch (e) {
                return key;
            }
        };
        window.__translations = translations;
    } catch (e) {}
    
    // ============================================
    // UI SETUP
    // ============================================
    
    // Add language toggle button to navbar
    function addLanguageToggle() {
        const navbar = document.querySelector('.nav-menu');
        if (navbar) {
            const langButton = document.createElement('li');
            langButton.className = 'language-toggle-wrapper';
            langButton.innerHTML = `
                <button class="language-toggle" aria-label="Toggle language">
                    <span class="lang-icon">🇬🇧</span>
                    <span class="lang-text">বাংলা</span>
                </button>
            `;
            navbar.appendChild(langButton);
            
            // Add click event
            langButton.querySelector('.language-toggle').addEventListener('click', toggleLanguage);
        }
    }
    
    // ============================================
    // INITIALIZE
    // ============================================
    
    // Add language toggle button
    addLanguageToggle();
    
    // Apply resolved language preference (URL > localStorage > default)
    applyTranslations(currentLang);
    
    console.log('🌐 Multi-language support initialized!');
    console.log(`📍 Current language: ${currentLang === 'en' ? 'English' : 'বাংলা'}`);
});

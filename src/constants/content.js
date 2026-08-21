// Target Reception Date: Sunday, September 13, 2026 at 6:30 PM
export const TARGET_DATE = new Date(2026, 8, 13, 18, 30, 0)
export const EVENT_DURATION_HOURS = 5
export const EVENT_END_DATE = new Date(TARGET_DATE.getTime() + EVENT_DURATION_HOURS * 60 * 60 * 1000)

export const MAPS_URL = "https://www.google.com/maps/place/Ashok+Mahaal/@12.7526117,78.698805,63m/data=!3m1!1e3!4m6!3m5!1s0x3bad087c311ea8fd:0x5586ba87a7ca2b99!8m2!3d12.7526875!4d78.6989375!16s%2Fg%2F11cn94d6w1"

// Bilingual Content Dictionary
export const CONTENT = {
  en: {
    badge: "Reception Invitation",
    subtitle: "With our family",
    groom: "Elanchezhiyan",
    bride: "Panimalar",
    tagline: "Wedding Reception",
    message: "Cordially invite you to celebrate the joyous occasion of our Wedding Reception.",
    countdownTitle: "Countdown to the Reception",
    days: "Days",
    hours: "Hours",
    mins: "Mins",
    secs: "Secs",
    ongoing: {
      badge: "🎉 Happening Now",
      title: "Wedding Reception in Progress",
      desc: "The celebration has begun! We warmly welcome you to Ashok Mahaal to celebrate with us."
    },
    thankyou: {
      badge: "💐 Thank You",
      title: "Thank You for Your Visit & Blessings",
      desc: "We heartfeltly thank you for joining us and making our Wedding Reception memorable with your gracious presence and blessings."
    },
    eventSectionTitle: "Event Details",
    eventBadge: "✨ Grand Reception",
    eventTitle: "Grand Wedding Reception",
    dateFormatted: "Sunday, September 13, 2026",
    timeFormatted: "6:30 PM Onwards",
    venueLabel: "Venue",
    venueName: "Ashok Mahaal",
    mapHint: "Tap \"View on Google Maps\" below for directions",
    btnMap: "View on Google Maps",
    btnCalendar: "Add to Calendar",
    btnBlessings: "Shower Blessings",
    btnShare: "Share Invite",
    footerQuote: "Your gracious presence is the greatest gift",
    footerCredits: "With Best Compliments From Family & Friends",
    calendarDesc: "You are cordially invited to celebrate the Wedding Reception of Elanchezhiyan & Panimalar at Ashok Mahaal.",
    shareMsg: `✨ *Wedding Reception Invitation* ✨\n\nWe warmly invite you with your family and friends to celebrate the Grand Wedding Reception of:\n\n🤵 *Elanchezhiyan* & 👰 *Panimalar*\n\n📅 *Date:* Sunday, September 13, 2026\n⏰ *Time:* 6:30 PM Onwards\n📍 *Venue:* Ashok Mahaal\n🗺️ *Location:* ${MAPS_URL}\n\nLooking forward to celebrating with you! 🌸`
  },
  ta: {
    badge: "வரவேற்பு அழைப்பிதழ்",
    subtitle: "எங்கள் குடும்பத்தினரின் நல்வாழ்த்துகளுடன்",
    groom: "இளஞ்செழியன்",
    bride: "பனிமலர்",
    tagline: "திருமண வரவேற்பு நல்விழா",
    message: "எங்கள் திருமண வரவேற்பு நல்விழாவிற்கு தங்களை குடும்ப சமேதராக வருகை தந்து வாழ்த்துமாறு அன்புடன் அழைக்கிறோம்.",
    countdownTitle: "வரவேற்பு விழாவுக்கான கவுண்ட்டவுன்",
    days: "நாட்கள்",
    hours: "மணிகள்",
    mins: "நிமிடங்கள்",
    secs: "நொடிகள்",
    ongoing: {
      badge: "🎉 விழா நடைபெறுகிறது",
      title: "திருமண வரவேற்பு நல்விழா இனிதே நடைபெறுகிறது",
      desc: "வரவேற்பு விழா தொடங்கியது! அசோக் மஹாலில் தங்களை குடும்ப சமேதராக அன்புடன் வரவேற்கிறோம்."
    },
    thankyou: {
      badge: "💐 மனமார்ந்த நன்றிகள்",
      title: "வருகை தந்து வாழ்த்தியமைக்கு நன்றி",
      desc: "எங்கள் திருமண வரவேற்பு நல்விழாவில் கலந்து கொண்டு எங்களை ஆசீர்வதித்து சிறப்பித்த அனைத்து நல்நெஞ்சங்களுக்கும் எங்கள் குடும்பத்தின் மனமார்ந்த நன்றிகள்."
    },
    eventSectionTitle: "நிகழ்ச்சி விவரங்கள்",
    eventBadge: "✨ மங்கல வரவேற்பு",
    eventTitle: "மங்கலத் திருமண வரவேற்பு",
    dateFormatted: "ஞாயிற்றுக்கிழமை, செப்டம்பர் 13, 2026",
    timeFormatted: "மாலை 6:30 மணி முதல்",
    venueLabel: "இடம்",
    venueName: "அசோக் மஹால்",
    mapHint: "வழி அறிய கீழே உள்ள \"கூகிள் மேப்\" பொத்தானை அழுத்தவும்",
    btnMap: "கூகிள் மேப் பார்க்க",
    btnCalendar: "கேலெண்டரில் சேர்க்க",
    btnBlessings: "ஆசி வழங்குக",
    btnShare: "பகிரவும்",
    footerQuote: "தங்களின் வருகையே எங்களுக்குப் பெருமை",
    footerCredits: "உற்றார், உறவினர் மற்றும் நண்பர்களின் நல்வாழ்த்துகளுடன்",
    calendarDesc: "இளஞ்செழியன் & பனிமலர் அவர்களின் திருமண வரவேற்பு நல்விழா - அசோக் மஹால்.",
    shareMsg: `✨ *திருமண வரவேற்பு அழைப்பிதழ்* ✨\n\nஎங்கள் திருமண வரவேற்பு நல்விழாவிற்கு தாங்களும் தங்களது குடும்பத்தினரும் வருகை தந்து எங்களை ஆசீர்வதிக்க அன்புடன் அழைக்கிறோம்!\n\nமணமக்கள்:\n🤵 *இளஞ்செழியன்* & 👰 *பனிமலர்*\n\n📅 *நாள்:* ஞாயிற்றுக்கிழமை, செப்டம்பர் 13, 2026\n⏰ *நேரம்:* மாலை 6:30 மணி முதல்\n📍 *இடம்:* அசோக் மஹால்\n🗺️ *கூகிள் மேப்:* ${MAPS_URL}\n\nதங்கள் வரவை நாடும் அன்புக் குடும்பத்தினர்! 🌸`
  }
}

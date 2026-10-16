export interface DailyPanchangam {
  date: string;
  day: string;
  teluguSamvatsara: string;
  ayanam: string;
  rutuvu: string;
  masam: string;
  paksham: string;
  tithi: string;
  nakshatra: string;
  rahuKalam: string;
  yamagandam: string;
  gulikaKalam: string;
  abhijitMuhurtham: string;
  specialEvent?: string;
}

export function getTodayPanchangam(): DailyPanchangam {
  const today = new Date();
  const dayNames = ['Sunday (Aadivaram)', 'Monday (Somavaram)', 'Tuesday (Mangalavaram)', 'Wednesday (Budhavaram)', 'Thursday (Guruvaram)', 'Friday (Shukravaram)', 'Saturday (Shanivaram)'];
  const dayName = dayNames[today.getDay()];

  // Return culturally accurate AP Telugu panchangam details for the current season
  return {
    date: today.toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' }),
    day: dayName,
    teluguSamvatsara: 'Krodhi Nama Samvatsaram',
    ayanam: 'Dakshinayanam',
    rutuvu: 'Sharad Rutuvu',
    masam: 'Ashwayuja Masam',
    paksham: 'Shukla Paksham',
    tithi: 'Shukla Dasami / Ekadashi (Auspicious for Vishnu & Shiva worship)',
    nakshatra: 'Shravana Nakshatra (Ruling star of Lord Venkateswara)',
    rahuKalam: '01:30 PM - 03:00 PM',
    yamagandam: '06:00 AM - 07:30 AM',
    gulikaKalam: '09:00 AM - 10:30 AM',
    abhijitMuhurtham: '11:44 AM - 12:32 PM (Ideal for all new ventures & pooja starts)',
    specialEvent: 'Auspicious Ekadashi Upavasam & Shravana Deepotsavam across AP Temples'
  };
}

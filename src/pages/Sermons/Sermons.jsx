import React, { useState, useMemo, useEffect, useCallback } from 'react';
import CustomDropdown from '../../components/reuseable/CustomDropdown';
import { FaSpinner, FaBook } from 'react-icons/fa';

const PlayIcon = () => (
  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"/>
  </svg>
);

const CalendarIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
  </svg>
);

const ClockIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
  </svg>
);

const Sermons = () => {
  const [playingVideo, setPlayingVideo] = useState(null);
  const [sortOrder, setSortOrder] = useState('Latest');
  const [displayedSermons, setDisplayedSermons] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  const ITEMS_PER_LOAD = 6;
  
  const allSermons = [
    { id: 'i8KXgkO5OvQ', title: '२०२६ नयाँ सालको बचन। 2026 New Year Sermon. Ps.Roshan', speaker: 'Ps Roshan Rai', date: 'Jan 4, 2026', dateValue: new Date('2025-01-12'), duration: '45 min', description: 'Join us for a powerful time of worship, praise, and sermon in the Nepali language. Whether you are joining from Nepal or around the world, we are glad you are here to experience the presence of God with us', videoUrl: 'https://www.youtube.com/embed/i8KXgkO5OvQ', thumbnail: 'https://img.youtube.com/vi/i8KXgkO5OvQ/hqdefault.jpg', isNew: true },
    { id: 'q0BlX-BM_oI', title: 'We are seated with Christ in the heavenly places', speaker: 'Ps Roshan Rai', date: 'Jan 12, 2025', dateValue: new Date('2025-01-12'), duration: '45 min', description: 'Join us for a powerful time of worship, praise, and sermon in the Nepali language. Whether you are joining from Nepal or around the world, we are glad you are here to experience the presence of God with us', videoUrl: 'https://www.youtube.com/embed/q0BlX-BM_oI', thumbnail: 'https://img.youtube.com/vi/q0BlX-BM_oI/hqdefault.jpg'},
    { id: '-gove3-uNRw', title: 'Worhsip Breaks Bondages', speaker: 'Ps Roshan Rai', date: 'Jan 5, 2025', dateValue: new Date('2025-01-05'), duration: '42 min', description: 'Join us for a powerful time of worship, praise, and sermon in the Nepali language. Whether you are joining from Nepal or around the world, we are glad you are here to experience the presence of God with us', videoUrl: 'https://www.youtube.com/embed/-gove3-uNRw', thumbnail: 'https://img.youtube.com/vi/-gove3-uNRw/hqdefault.jpg' },
    { id: 'sWxGqhckhIQ', title: 'The Lord should be the first place in our lives, not wealth. ', speaker: 'Ps Roshan Rai', date: 'Dec 29, 2024', dateValue: new Date('2024-12-29'), duration: '38 min', description: 'Join us for a powerful time of worship, praise, and sermon in the Nepali language. Whether you are joining from Nepal or around the world, we are glad you are here to experience the presence of God with us', videoUrl: 'https://youtu.be/sWxGqhckhIQ?si=bNAsQJhjlkrY_g4l', thumbnail: 'https://img.youtube.com/vi/sWxGqhckhIQ/hqdefault.jpg' },
    { id: 'vkQTE-djCF8', title: 'Worship (आराधना)', speaker: 'Ps Roshan Rai', date: 'Dec 22, 2024', dateValue: new Date('2024-12-22'), duration: '40 min', description: 'Join us for a powerful time of worship, praise, and sermon in the Nepali language. Whether you are joining from Nepal or around the world, we are glad you are here to experience the presence of God with us', videoUrl: 'https://www.youtube.com/embed/vkQTE-djCF8', thumbnail: 'https://img.youtube.com/vi/vkQTE-djCF8/hqdefault.jpg' },
    { id: 'csqes4VS7Kg', title: 'He (JESUS) is coming!', speaker: 'Ps Samuel Rai', date: 'Dec 15, 2024', dateValue: new Date('2024-12-15'), duration: '43 min', description: 'Join us for a powerful time of worship, praise, and sermon in the Nepali language. Whether you are joining from Nepal or around the world, we are glad you are here to experience the presence of God with us', videoUrl: 'https://www.youtube.com/embed/csqes4VS7Kg', thumbnail: 'https://img.youtube.com/vi/csqes4VS7Kg/hqdefault.jpg' },
    { id: '9sTAb_RZclQ', title: 'Pentecost Sunday', speaker: 'Ps Roshan Rai', date: 'Dec 8, 2024', dateValue: new Date('2024-12-08'), duration: '37 min', description: 'Join us for a powerful time of worship, praise, and sermon in the Nepali language. Whether you are joining from Nepal or around the world, we are glad you are here to experience the presence of God with us', videoUrl: 'https://www.youtube.com/embed/9sTAb_RZclQ', thumbnail: 'https://img.youtube.com/vi/9sTAb_RZclQ/hqdefault.jpg' },
    { id: 'Hw9OanUNnAg', title: 'Holy Spirit (पवित्र आत्मा)', speaker: 'Ps Samuel Rai', date: 'Dec 1, 2024', dateValue: new Date('2024-12-01'), duration: '41 min', description: 'Join us for a powerful time of worship, praise, and sermon in the Nepali language. Whether you are joining from Nepal or around the world, we are glad you are here to experience the presence of God with us', videoUrl: 'https://www.youtube.com/embed/Hw9OanUNnAg', thumbnail: 'https://img.youtube.com/vi/Hw9OanUNnAg/hqdefault.jpg' },
    { id: 'VId70DhFiNE', title: 'Do not touch the Anointed', speaker: 'Ps Roshan Rai', date: 'Nov 24, 2024', dateValue: new Date('2024-11-24'), duration: '39 min', description: 'Join us for a powerful time of worship, praise, and sermon in the Nepali language. Whether you are joining from Nepal or around the world, we are glad you are here to experience the presence of God with us', videoUrl: 'https://www.youtube.com/embed/VId70DhFiNE', thumbnail: 'https://img.youtube.com/vi/VId70DhFiNE/hqdefault.jpg' },
    { id: 'f4QtbRcbc8U', title: 'Reward for Faithfulness', speaker: 'Ps Samuel Rai', date: 'Nov 17, 2024', dateValue: new Date('2024-11-17'), duration: '44 min', description: 'Join us for a powerful time of worship, praise, and sermon in the Nepali language. Whether you are joining from Nepal or around the world, we are glad you are here to experience the presence of God with us', videoUrl: 'https://www.youtube.com/embed/f4QtbRcbc8U', thumbnail: 'https://img.youtube.com/vi/f4QtbRcbc8U/hqdefault.jpg' },
    { id: 'MmjWmjSxTpA', title: 'While time is yet on our side, let us labor for the Lord; for once time has slipped away, it shall never return.', speaker: 'Ps Roshan Rai', date: 'Nov 10, 2024', dateValue: new Date('2024-11-10'), duration: '36 min', description: 'Join us for a powerful time of worship, praise, and sermon in the Nepali language. Whether you are joining from Nepal or around the world, we are glad you are here to experience the presence of God with us', videoUrl: 'https://www.youtube.com/embed/MmjWmjSxTpA', thumbnail: 'https://img.youtube.com/vi/MmjWmjSxTpA/hqdefault.jpg' },
    { id: '79MOWtcW7R8', title: 'Silver Jubilee (25 Years of Ministry)', speaker: 'Ps Roshan Rai', date: 'Nov 3, 2024', dateValue: new Date('2024-11-03'), duration: '42 min', description: 'Join us for a powerful time of worship, praise, and sermon in the Nepali language. Whether you are joining from Nepal or around the world, we are glad you are here to experience the presence of God with us', videoUrl: 'https://www.youtube.com/embed/79MOWtcW7R8', thumbnail: 'https://img.youtube.com/vi/79MOWtcW7R8/hqdefault.jpg' },
    { id: 'Jd_dqmDFUvM', title: 'Focus on your gaol', speaker: 'Ps Roshan Rai', date: 'Oct 27, 2024', dateValue: new Date('2024-10-27'), duration: '40 min', description: 'Join us for a powerful time of worship, praise, and sermon in the Nepali language. Whether you are joining from Nepal or around the world, we are glad you are here to experience the presence of God with us', videoUrl: 'https://www.youtube.com/embed/Jd_dqmDFUvM', thumbnail: 'https://img.youtube.com/vi/Jd_dqmDFUvM/hqdefault.jpg' },
    { id: 'tqnLAaL-kWg', title: 'LFNC 16Th Anniversary', speaker: 'Ps Roshan Rai / Ps Samuel Rai', date: 'Oct 20, 2024', dateValue: new Date('2024-10-20'), duration: '38 min', description: 'Join us for a powerful time of worship, praise, and sermon in the Nepali language. Whether you are joining from Nepal or around the world, we are glad you are here to experience the presence of God with us', videoUrl: 'https://www.youtube.com/embed/tqnLAaL-kWg', thumbnail: 'https://img.youtube.com/vi/tqnLAaL-kWg/hqdefault.jpg' },
    { id: 'cjVKXzRXwxw', title: 'Put God first in your life', speaker: 'Ps Samuel Rai', date: 'Oct 13, 2024', dateValue: new Date('2024-10-13'), duration: '43 min', description: 'Join us for a powerful time of worship, praise, and sermon in the Nepali language. Whether you are joining from Nepal or around the world, we are glad you are here to experience the presence of God with us', videoUrl: 'https://www.youtube.com/embed/cjVKXzRXwxw', thumbnail: 'https://img.youtube.com/vi/cjVKXzRXwxw/hqdefault.jpg' },
    { id: 'ks-cNm7bCa0', title: 'Who gives us strength to earn wealth', speaker: 'Ps Roshan Rai', date: 'Oct 6, 2024', dateValue: new Date('2024-10-06'), duration: '37 min', description: 'Join us for a powerful time of worship, praise, and sermon in the Nepali language. Whether you are joining from Nepal or around the world, we are glad you are here to experience the presence of God with us', videoUrl: 'https://www.youtube.com/embed/ks-cNm7bCa0', thumbnail: 'https://img.youtube.com/vi/ks-cNm7bCa0/hqdefault.jpg' },
    { id: 'WowtvOBW1lA', title: 'God knows all about you', speaker: 'Ps Roshan Rai', date: 'Sep 29, 2024', dateValue: new Date('2024-09-29'), duration: '41 min', description: 'Join us for a powerful time of worship, praise, and sermon in the Nepali language. Whether you are joining from Nepal or around the world, we are glad you are here to experience the presence of God with us', videoUrl: 'https://www.youtube.com/embed/WowtvOBW1lA', thumbnail: 'https://img.youtube.com/vi/WowtvOBW1lA/hqdefault.jpg' },
    { id: 'MnXJwqYSwlk', title: 'Jesus came to seek and save the lost', speaker: 'Ps Roshan Rai', date: 'Sep 22, 2024', dateValue: new Date('2024-09-22'), duration: '39 min', description: 'Join us for a powerful time of worship, praise, and sermon in the Nepali language. Whether you are joining from Nepal or around the world, we are glad you are here to experience the presence of God with us', videoUrl: 'https://www.youtube.com/embed/MnXJwqYSwlk', thumbnail: 'https://img.youtube.com/vi/MnXJwqYSwlk/hqdefault.jpg' },
    { id: '0TnLkiszKkA', title: 'Every one will receive the things done on the Earth', speaker: 'Ps Roshan Rai', date: 'Sep 15, 2024', dateValue: new Date('2024-09-15'), duration: '44 min', description: 'Join us for a powerful time of worship, praise, and sermon in the Nepali language. Whether you are joining from Nepal or around the world, we are glad you are here to experience the presence of God with us', videoUrl: 'https://www.youtube.com/embed/0TnLkiszKkA', thumbnail: 'https://img.youtube.com/vi/0TnLkiszKkA/hqdefault.jpg' },
    { id: 'NBUbZS6qNqA', title: 'Forget the past and move forward', speaker: 'Ps Roshan Rai', date: 'Sep 8, 2024', dateValue: new Date('2024-09-08'), duration: '36 min', description: 'Join us for a powerful time of worship, praise, and sermon in the Nepali language. Whether you are joining from Nepal or around the world, we are glad you are here to experience the presence of God with us', videoUrl: 'https://www.youtube.com/embed/NBUbZS6qNqA', thumbnail: 'https://img.youtube.com/vi/NBUbZS6qNqA/hqdefault.jpg' },
    { id: 'sWP70z2Q8AE', title: 'A fruitful tree', speaker: 'Ps Roshan Rai', date: 'Sep 1, 2024', dateValue: new Date('2024-09-01'), duration: '40 min', description: 'Join us for a powerful time of worship, praise, and sermon in the Nepali language. Whether you are joining from Nepal or around the world, we are glad you are here to experience the presence of God with us', videoUrl: 'https://www.youtube.com/embed/sWP70z2Q8AE', thumbnail: 'https://img.youtube.com/vi/sWP70z2Q8AE/hqdefault.jpg' },
    { id: 'nV14o04hCLI', title: 'Share your burdens with God, not the world. People may listen, but God can act.', speaker: 'Ps Roshan Rai', date: 'Aug 25, 2024', dateValue: new Date('2024-08-25'), duration: '38 min', description: 'Join us for a powerful time of worship, praise, and sermon in the Nepali language. Whether you are joining from Nepal or around the world, we are glad you are here to experience the presence of God with us', videoUrl: 'https://www.youtube.com/embed/nV14o04hCLI', thumbnail: 'https://img.youtube.com/vi/nV14o04hCLI/hqdefault.jpg' },
    { id: 'o2Q0AgTAHWs', title: 'What the Church Is and What It Is Not (मण्डली के हो र के होइन)', speaker: 'Ps Roshan Rai', date: 'Aug 18, 2024', dateValue: new Date('2024-08-18'), duration: '42 min', description: 'Join us for a powerful time of worship, praise, and sermon in the Nepali language. Whether you are joining from Nepal or around the world, we are glad you are here to experience the presence of God with us', videoUrl: 'https://www.youtube.com/embed/o2Q0AgTAHWs', thumbnail: 'https://img.youtube.com/vi/o2Q0AgTAHWs/hqdefault.jpg' },
    { id: '24o9_tYVIx0', title: 'Gideon\'s Army', speaker: 'Ps Samuel Rai', date: 'Aug 11, 2024', dateValue: new Date('2024-08-11'), duration: '37 min', description: 'Join us for a powerful time of worship, praise, and sermon in the Nepali language. Whether you are joining from Nepal or around the world, we are glad you are here to experience the presence of God with us', videoUrl: 'https://www.youtube.com/embed/24o9_tYVIx0', thumbnail: 'https://img.youtube.com/vi/24o9_tYVIx0/hqdefault.jpg' },
    { id: 'jJzL7JLBLyY', title: 'Jesus has set us free (येशूले हामीलाई स्वतन्त्र गराउनु भयो )', speaker: 'Ps Roshan Rai', date: 'Aug 4, 2024', dateValue: new Date('2024-08-04'), duration: '41 min', description: 'Join us for a powerful time of worship, praise, and sermon in the Nepali language. Whether you are joining from Nepal or around the world, we are glad you are here to experience the presence of God with us', videoUrl: 'https://www.youtube.com/embed/jJzL7JLBLyY', thumbnail: 'https://img.youtube.com/vi/jJzL7JLBLyY/hqdefault.jpg' },
    { id: '40CeR__kVrE', title: 'Power in your tongue (जिब्रोमा शक्ति छ)', speaker: 'Ps Roshan Rai', date: 'Jul 28, 2024', dateValue: new Date('2024-07-28'), duration: '39 min', description: 'Join us for a powerful time of worship, praise, and sermon in the Nepali language. Whether you are joining from Nepal or around the world, we are glad you are here to experience the presence of God with us', videoUrl: 'https://www.youtube.com/embed/40CeR__kVrE', thumbnail: 'https://img.youtube.com/vi/40CeR__kVrE/hqdefault.jpg' },
    { id: '152UJIelGyM', title: 'Spirit of God is upon me,(परमेश्वरको आत्मा म माथि छ)', speaker: 'Ps Roshan Rai', date: 'Jul 21, 2024', dateValue: new Date('2024-07-21'), duration: '43 min', description: 'Join us for a powerful time of worship, praise, and sermon in the Nepali language. Whether you are joining from Nepal or around the world, we are glad you are here to experience the presence of God with us', videoUrl: 'https://www.youtube.com/embed/152UJIelGyM', thumbnail: 'https://img.youtube.com/vi/152UJIelGyM/hqdefault.jpg' },
    { id: 'l8ZhnFzoms8', title: 'Betrayal and Hurt (धोका र चोट)', speaker: 'Ps Roshan Rai', date: 'Jul 14, 2024', dateValue: new Date('2024-07-14'), duration: '36 min', description: 'Join us for a powerful time of worship, praise, and sermon in the Nepali language. Whether you are joining from Nepal or around the world, we are glad you are here to experience the presence of God with us', videoUrl: 'https://www.youtube.com/embed/l8ZhnFzoms8', thumbnail: 'https://img.youtube.com/vi/l8ZhnFzoms8/hqdefault.jpg' },
    { id: '2_JnuvjusJI', title: 'God will turn your situation, (परमेश्वरले तपाइँको परिस्थितिलाई बदलौनु हुन्छ)', speaker: 'Ps Roshan Rai', date: 'Jul 7, 2024', dateValue: new Date('2024-07-07'), duration: '40 min', description: 'Join us for a powerful time of worship, praise, and sermon in the Nepali language. Whether you are joining from Nepal or around the world, we are glad you are here to experience the presence of God with us', videoUrl: 'https://www.youtube.com/embed/2_JnuvjusJI', thumbnail: 'https://img.youtube.com/vi/2_JnuvjusJI/hqdefault.jpg' },
    { id: 't67X22QtJGI', title: 'Pride brings low, humbleness brings honour (घमण्डले पतन ल्याउँछ; नम्रताले आदर)', speaker: 'Ps Roshan Rai', date: 'Jun 30, 2024', dateValue: new Date('2024-06-30'), duration: '38 min', description: 'Join us for a powerful time of worship, praise, and sermon in the Nepali language. Whether you are joining from Nepal or around the world, we are glad you are here to experience the presence of God with us', videoUrl: 'https://www.youtube.com/embed/t67X22QtJGI', thumbnail: 'https://img.youtube.com/vi/t67X22QtJGI/hqdefault.jpg' },
    { id: 'ikSdsUbD6gE', title: 'False Teachings (झूटो शिक्षा कसरी चिन्ने )', speaker: 'Ps Roshan Rai', date: 'Jun 23, 2024', dateValue: new Date('2024-06-23'), duration: '42 min', description: 'Join us for a powerful time of worship, praise, and sermon in the Nepali language. Whether you are joining from Nepal or around the world, we are glad you are here to experience the presence of God with us', videoUrl: 'https://www.youtube.com/embed/ikSdsUbD6gE', thumbnail: 'https://img.youtube.com/vi/ikSdsUbD6gE/hqdefault.jpg' },
    { id: 'jiWnz2tz9e8', title: 'Fear not (नडराऊ)', speaker: 'Ps Roshan Rai', date: 'Jun 16, 2024', dateValue: new Date('2024-06-16'), duration: '37 min', description: 'Join us for a powerful time of worship, praise, and sermon in the Nepali language. Whether you are joining from Nepal or around the world, we are glad you are here to experience the presence of God with us', videoUrl: 'https://www.youtube.com/embed/jiWnz2tz9e8', thumbnail: 'https://img.youtube.com/vi/jiWnz2tz9e8/hqdefault.jpg' },
    { id: 'xG_tn_XvaqQ', title: 'Interview Session of Ps. Roshan Rai, LFNC, Bangalore by Mountain Divine Gallery.', speaker: 'Ps Roshan Rai', date: 'Jun 9, 2024', dateValue: new Date('2024-06-09'), duration: '41 min', description: 'Join us for a powerful time of worship, praise, and sermon in the Nepali language. Whether you are joining from Nepal or around the world, we are glad you are here to experience the presence of God with us', videoUrl: 'https://www.youtube.com/embed/xG_tn_XvaqQ', thumbnail: 'https://img.youtube.com/vi/xG_tn_XvaqQ/hqdefault.jpg' },
    { id: 'R234Li0x7Hc', title: 'Jesus is coming soon be ready, (येशू चाँडै आउनु हुदैछ तयार बस)', speaker: 'Ps Roshan Rai', date: 'Jun 2, 2024', dateValue: new Date('2024-06-02'), duration: '39 min', description: 'Join us for a powerful time of worship, praise, and sermon in the Nepali language. Whether you are joining from Nepal or around the world, we are glad you are here to experience the presence of God with us', videoUrl: 'https://www.youtube.com/embed/R234Li0x7Hc', thumbnail: 'https://img.youtube.com/vi/R234Li0x7Hc/hqdefault.jpg' },
    { id: 'PPc-gGR7t8E', title: 'Presence of God (परमेश्वरको उपस्थिति)', speaker: 'Ps Roshan Rai', date: 'May 26, 2024', dateValue: new Date('2024-05-26'), duration: '44 min', description: 'Join us for a powerful time of worship, praise, and sermon in the Nepali language. Whether you are joining from Nepal or around the world, we are glad you are here to experience the presence of God with us', videoUrl: 'https://www.youtube.com/embed/PPc-gGR7t8E', thumbnail: 'https://img.youtube.com/vi/PPc-gGR7t8E/hqdefault.jpg' },
    { id: 'ZWhbzBmASok', title: 'Whom will the Lord call upon (परमेश्वरले कसलाई प्रयोग गर्नुहुन्छ ?)', speaker: 'Ps Roshan Rai', date: 'May 19, 2024', dateValue: new Date('2024-05-19'), duration: '36 min', description: 'Join us for a powerful time of worship, praise, and sermon in the Nepali language. Whether you are joining from Nepal or around the world, we are glad you are here to experience the presence of God with us', videoUrl: 'https://www.youtube.com/embed/ZWhbzBmASok', thumbnail: 'https://img.youtube.com/vi/ZWhbzBmASok/hqdefault.jpg' },
    { id: 'i9K97I9Pbts', title: 'Repentance/पश्‍चात्ताप', speaker: 'Ps Roshan Rai', date: 'May 12, 2024', dateValue: new Date('2024-05-12'), duration: '40 min', description: 'Join us for a powerful time of worship, praise, and sermon in the Nepali language. Whether you are joining from Nepal or around the world, we are glad you are here to experience the presence of God with us', videoUrl: 'https://www.youtube.com/embed/i9K97I9Pbts', thumbnail: 'https://img.youtube.com/vi/i9K97I9Pbts/hqdefault.jpg' },
    { id: 'EeYGZdBVZV4', title: 'Love(प्रेम)', speaker: 'Ps Roshan Rai', date: 'May 5, 2024', dateValue: new Date('2024-05-05'), duration: '38 min', description: 'Join us for a powerful time of worship, praise, and sermon in the Nepali language. Whether you are joining from Nepal or around the world, we are glad you are here to experience the presence of God with us', videoUrl: 'https://www.youtube.com/embed/EeYGZdBVZV4', thumbnail: 'https://img.youtube.com/vi/EeYGZdBVZV4/hqdefault.jpg' },
    { id: 'ILhOX9CsSu4', title: 'Who is the Holy Spirit (पवित्र आत्मा) ?', speaker: 'Ps Roshan Rai', date: 'Apr 28, 2024', dateValue: new Date('2024-04-28'), duration: '42 min', description: 'Join us for a powerful time of worship, praise, and sermon in the Nepali language. Whether you are joining from Nepal or around the world, we are glad you are here to experience the presence of God with us', videoUrl: 'https://www.youtube.com/embed/ILhOX9CsSu4', thumbnail: 'https://img.youtube.com/vi/ILhOX9CsSu4/hqdefault.jpg' },
    { id: '17xok8COKb0', title: 'Jesus can raise the death (येशुले मृत्कलाई जीवित पार्नु हुन्छ)', speaker: 'Ps Roshan Rai', date: 'Apr 21, 2024', dateValue: new Date('2024-04-21'), duration: '37 min', description: 'Join us for a powerful time of worship, praise, and sermon in the Nepali language. Whether you are joining from Nepal or around the world, we are glad you are here to experience the presence of God with us', videoUrl: 'https://www.youtube.com/embed/17xok8COKb0', thumbnail: 'https://img.youtube.com/vi/17xok8COKb0/hqdefault.jpg' },
    { id: 'flY6M5BNcjI', title: 'Healing & Miracle Service, Nepal (येशुले रोगीहरूलाई निको पार्नु भयो)', speaker: 'Ps Roshan Rai', date: 'Apr 14, 2024', dateValue: new Date('2024-04-14'), duration: '41 min', description: 'Join us for a powerful time of worship, praise, and sermon in the Nepali language. Whether you are joining from Nepal or around the world, we are glad you are here to experience the presence of God with us', videoUrl: 'https://www.youtube.com/embed/flY6M5BNcjI', thumbnail: 'https://img.youtube.com/vi/flY6M5BNcjI/hqdefault.jpg' }
  ];

  const sortedSermons = useMemo(() => {
    const filtered = searchQuery
      ? allSermons.filter(sermon => 
          sermon.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : allSermons;
    
    return filtered.sort((a, b) => 
      sortOrder === 'Latest' ? b.dateValue - a.dateValue : a.dateValue - b.dateValue
    );
  }, [sortOrder, searchQuery]);

  useEffect(() => {
    setDisplayedSermons(sortedSermons.slice(0, ITEMS_PER_LOAD));
  }, [sortedSermons]);

  const loadMore = useCallback(() => {
    if (loading) return;
    setLoading(true);
    setTimeout(() => {
      const currentLength = displayedSermons.length;
      const newSermons = sortedSermons.slice(currentLength, currentLength + ITEMS_PER_LOAD);
      if (newSermons.length > 0) {
        setDisplayedSermons(prev => [...prev, ...newSermons]);
      }
      setLoading(false);
    }, 300);
  }, [displayedSermons.length, loading, sortedSermons]);

  useEffect(() => {
    if (displayedSermons.length >= sortedSermons.length) return;
    
    let timeoutId;
    const handleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 1000) {
          loadMore();
        }
      }, 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [loadMore, displayedSermons.length, sortedSermons.length]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-blue-900 py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-20 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
        <div className="absolute -top-40 right-1/3 w-80 h-80 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000" />
        <div className="absolute bottom-20 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-2000" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight flex items-center justify-center gap-4">
            <FaBook className="w-12 h-12 sm:w-16 sm:h-16 text-purple-400" />
            All <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-red-400">Sermons</span>
          </h1>
          <p className="font-body text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Watch our complete collection of inspiring messages and teachings
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-between items-center mb-8">
          <div className="w-full sm:flex-1 max-w-md relative">
            <input
              type="text"
              placeholder="Search sermons by title..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-4 pr-12 py-3 bg-white/20 backdrop-blur-lg border-2 border-white/30 rounded-xl text-white placeholder-gray-300 focus:border-purple-500 focus:outline-none"
            />
            <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <div className="w-full sm:w-48">
            <CustomDropdown
              options={['Latest', 'Oldest']}
              value={sortOrder}
              onChange={setSortOrder}
              placeholder="Sort by"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedSermons.map((sermon) => (
            <div key={sermon.id} className="group relative">
              <div className="relative h-full bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:scale-105 hover:bg-white/15 hover:shadow-2xl hover:shadow-purple-500/30">
                <div className="relative h-48 overflow-hidden">
                  {playingVideo === sermon.id ? (
                    <iframe
                      src={`${sermon.videoUrl}?autoplay=1`}
                      className="w-full h-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <>
                      <img
                        src={sermon.thumbnail}
                        alt={sermon.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        onError={(e) => {
                          if (e.target.src.includes('maxresdefault')) {
                            e.target.src = e.target.src.replace('hqdefault.jpg', 'hqdefault.jpg');
                          }
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                      <div 
                        className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                        onClick={() => setPlayingVideo(sermon.id)}
                      >
                        <div className="w-16 h-16 bg-red-600/90 backdrop-blur-sm rounded-full flex items-center justify-center text-white shadow-2xl transform scale-90 group-hover:scale-100 transition-transform duration-300">
                          <PlayIcon />
                        </div>
                      </div>
                      {sermon.isNew && (
                        <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                          NEW
                        </div>
                      )}
                    </>
                  )}
                </div>

                <div className="p-6 space-y-4">
                  <h3 className="font-heading text-xl font-semibold text-white group-hover:text-purple-300 transition-all duration-300">
                    {sermon.title}
                  </h3>
                  <p className="font-body text-gray-300 text-sm leading-relaxed line-clamp-2">
                    {sermon.description}
                  </p>
                  <div className="font-body text-purple-200 font-medium text-sm">
                    {sermon.speaker}
                  </div>
                  {/* <div className="flex items-center justify-between text-gray-500 text-xs">
                    <div className="flex items-center gap-1">
                      <CalendarIcon />
                      <span>{sermon.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <ClockIcon />
                      <span>{sermon.duration}</span>
                    </div>
                  </div> */}
                  <button 
                    onClick={() => window.open(sermon.videoUrl, '_blank')}
                    className="w-full mt-4 bg-gradient-to-r from-purple-600 to-red-600 hover:from-purple-700 hover:to-red-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <PlayIcon />
                    <span className="font-heading font-semibold">Watch Now</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {loading && (
          <div className="flex justify-center items-center py-12">
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
              <FaSpinner className="w-8 h-8 text-white animate-spin" />
            </div>
          </div>
        )}

        {!loading && displayedSermons.length < sortedSermons.length && (
          <div className="text-center mt-12">
            <button
              onClick={loadMore}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-red-600 text-white font-heading font-semibold rounded-full hover:from-purple-700 hover:to-red-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Load More Sermons
            </button>
          </div>
        )}
      </div>

      <style>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default Sermons;

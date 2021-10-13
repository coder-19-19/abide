$('.center').slick({
    centerMode: true,
    // centerPadding: '10px',
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
        //   centerPadding: '40px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
        //   centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });

  const lang = document.querySelectorAll('.lang')
  const p1 = document.querySelector('.p1')
  const p2 = document.querySelector('.p2')
  const header = document.querySelector('.header-text')
  lang.forEach(item => {
      item.addEventListener('click',(e) => {
          const id = e.target.id
          if(id === 'az'){
            header.innerHTML = 'Şəhİd heykəltəraş Samİr Kaçayevİn “Küləklə sovrulmuşlar” əsərİ'
            p1.innerHTML = 'TORPAQLARIMIZIN BÜTÖVLÜYÜ UĞRUNDA ŞƏHİD OLMUŞ HEYKƏLTƏRAŞ SAMİR KAÇAYEV 1994-CÜ ILDƏ ŞAMAXI RAYONUNUN ÇUXURYURD KƏNDİNDƏ DOĞULMUŞDUR. O, 2015-Cİ İLDƏ AZƏRBAYCAN DÖVLƏT RƏSSAMLIQ AKADEMIYASINI HEYKƏLTƏRAŞLIQ İXTISASI ÜZRƏ MÜVƏFFƏQİYYƏTLƏ BİTİRİB MAGİSTRATURAYA DAXİL OLUR. O, TƏHSİLİNİ YARIMÇIQ QOYARAQ HƏRBİ XİDMƏTƏ YOLLANIR VƏ 2016-CI İLİN APREL DÖYÜŞLƏRİNDƏ ŞƏHİDLİK ZİRVƏSİNƏ YÜKSƏLİR. SAMİR KAÇAYEV GÖSTƏRDİYİ RƏŞADƏTƏ GÖRƏ ÖLÜMÜNDƏN SONRA AZƏRBAYCAN RESPUBLİKASININ PREZİDENTİ, ALİ BAŞ KOMANDAN CƏNABİLHAM ƏLİYEVİN SƏRƏNCAMI İLƏ “İGİDLİYƏ GÖRƏ” MEDALI İLƏ TƏLTİF EDİLMİŞDİR.'
            p2.innerHTML = 'SAMİR YAŞADIĞI QISA ÖMÜR ƏRZİNDƏ BÖYÜK İŞLƏR GÖRMƏYƏ MÜVƏFFƏQ OLMUŞDUR. O, YARATDIĞI ƏSƏRLƏRİ, SƏNƏTƏ BAXIŞI, İNSANLARA MÜNASİBƏTİ, VƏTƏNƏ SEVGİSİ İLƏ ONU TANIYANLARIN RƏĞBƏT VƏ MƏHƏBBƏTİNİ QAZANMIŞDIR.'
        }else if(id === 'en'){
            header.innerHTML = 'The work of the martyr- sculptor Samir Kachayev "Gone with the Wind".'
            p1.innerHTML = 'The sculptor Samir Kachayev, who died in the battle for the integrity of our lands, was born in 1994 in the village of Chukhuryurd, Shamakhi region. In 2015, he successfully graduated from the Azerbaijan State Academy of Arts as a sculptor and entered the magistracy. He quitted school and joined the army where he was killed in the battle in April 2016. By the order of the President of the Republic of Azerbaijan, Supreme Commander-in-Chief Ilham Aliyev Samir Kachayev was posthumously awarded for his courage the medal "For Courage".'
            p2.innerHTML = 'During his short life, Samir was able to accomplish great things. He won the sympathy and love of those who knew him with his works, his view on art, his attitude towards people, his love for his homeland.'
        }else{
            header.innerHTML = 'Работа шехида- скульптора Самира Качаева «Унесенные ветром».'
            p1.innerHTML = 'Скульптор Самир Качаев, погибший в битве за целостность наших земель, родился в 1994 году в селе Чухурюрд Шамахинского района. В 2015 году он успешно окончил Азербайджанскую Государственную Академию Исскуств по специальности скульптор и поступил в магистратуру. Он оставил школу и пошел в армию, где пал смертью храбрых в боях в апреле 2016 года. Распоряжением Президента Азербайджанской Республики, Верховного Главнокомандующего Ильхама Алиева за отвагу Самир Качаев был посмертно награжден медалью «За отвагу».'
            p2.innerHTML = 'За свою короткую жизнь Самир смог совершить великие дела. Он завоевал симпатию и любовь тех, кто знал его, своими произведениями, своим взглядом на искусство, своим отношением к людям, своей любовью к своей Родине.'
        }
      })
  })
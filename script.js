isPersian = true;

function translateToPersian() {
    var a = document.getElementById('per')
    a.classList.add('persian')
    a.innerHTML = 'فارسی'
    a.style.fontFamily = 'IranYekan'
    var a = document.getElementById('en')
    a.classList.add('persian')
    a.style.fontFamily = 'IranYekan'
    a.innerHTML = 'انگلیسی'
    //header
    var a = document.getElementById('1')
    a.classList.add('persian')
    a.innerHTML = `برنامه سازی پیشرفته 1-1400
                <br>
                <div class="credits">
                <h4 class="persian" style="font-size: calc(3px + 0.5vw + 0.5vh);font-family: 'IranYekan';">دانشگاه گیلان - دانشکده علوم ریاضی</h4>
                </div>
            </h2>`

    //main - per
    try {
        var a = document.getElementById('0')
        a.innerText = 'برنامه سازی پیشرفته'

        //instructor
        var a = document.getElementById('2')
        a.classList.add('persian')
        a.innerHTML = `مدرس: <a class="link"
        href="https://staff.guilan.ac.ir/eskandari/" target="_blank">دکتر صادق اسکندری</a>`

        var a = document.getElementById('prevcourse1')
        a.classList.add('persian')
        a.innerHTML = `ترم 982`
        a.style.fontFamily = 'IranYekan'

        var a = document.getElementById('prevcourse2')
        a.classList.add('persian')
        a.innerHTML = `ترم 991`
        a.style.fontFamily = 'IranYekan'

        var a = document.getElementById('prevcourse3')
        a.classList.add('persian')
        a.innerHTML = `ترم 992`
        a.style.fontFamily = 'IranYekan'


        //
        var a = document.getElementById('3')
        a.classList.add('persian')
        a.style.direction = "rtl"
        a.innerHTML = `
        امروزه، برنامه نویسی کامپیوتری به یکی از مهارتهای مورد نیاز در بسیاری از علوم تبدیل شده است. در این درس، با مفاهیم پیشرفته برنامه نویسی آشنا خواهیم شد. برنامه نویسی شیء گرا، ساختمان داده ها و طراحی و تحلیل الگوریتمهای کاربردی، از جمله مهمترین این مفاهیم هستند. اگرچه، تمامی این مفاهیم مستقل از یک زبان برنامه نویسی خاص قابل طرح می باشند، در این درس از زبان محبوب <a class="link" href="https://www.python.org/" target="_blank">پایتون</a> به عنوان ابزاری جهت پیاده سازی مفاهیم مورد نظر استفاده خواهیم کرد. دلیل این انتخاب، سادگی، محبوبیت و متن باز بودن این زبان برنامه نویسی است. در این درس، تمرکز ویژه ای بر فعالیت های عملی و گروهی خواهد بود. در طول یک ترم، دانشجویان با نحوه کدنویسی شیء گرا آشنا شده و این مفهوم را در قالب یک پروژه گروهی پایانی پیاده سازی خواهند کرد. در پایان این واحد درسی از دانشجویان محترم انتظار می رود تا بتوانند برای پروژه های بزرگ کلاس های مختلف را طراحی کرده، از ساختمان داده های مناسب برای آنها بهره برده و واسط های گرافیکی کارآمد طراحی کنند. جهت دریافت اطلاعات تکمیلی، به صفحه <a class="link"
        href="./pages/syllabus.html">رئوس مطالب</a> مراجعه نمائید.
        `
        var a = document.getElementById('4')
        a.classList.add('persian')
        a.innerHTML = `رئوس مطالب`

        var a = document.getElementById('5')
        a.classList.add('persian')
        a.innerHTML = `فایل های درسی بارگذاری شده به همراه اطلاعاتی درباره منابع و جزئیات ریز نمرات`

        var a = document.getElementById('6')
        a.classList.add('persian')
        a.innerHTML = `تیم حل تمرین`

        var a = document.getElementById('7')
        a.classList.add('persian')
        a.innerHTML = `لیست اعضای حل تمرین این ترم`

        var a = document.getElementById('8')
        a.classList.add('persian')
        a.innerHTML = `پروژه های پایانی`

        var a = document.getElementById('9')
        a.classList.add('persian')
        a.innerHTML = `اطلاعات کامل در مورد پروژه های پایانی`
        var a = document.getElementById('10')
        a.classList.add('persian')
        a.innerHTML = `صفحه تمرین ها`
        var a = document.getElementById('11')
        a.classList.add('persian')
        a.innerHTML = `اطلاعاتی در مورد تمرین های ارسالی در طول ترم`
    } catch { }

    //syllabus - per
    try {

        var a = document.getElementById('sl_1_date')
        a.innerText = '1399/11/27'
        a.style.fontFamily = 'IranYekan'

        var a = document.getElementById('sl_1_subject')
        a.innerText = 'نصب و راه اندازی برنامه های مورد نیاز ، معرفی کوئرا'
        a.style.fontFamily = 'IranYekan'

        var a = document.getElementById('sl_1_instructors')
        a.innerText = ' کیان رضایی / علی داداش زاده / سارا مظاهری / امیر اصغری'
        a.style.fontFamily = 'IranYekan'

        var a = document.getElementById('sl_2_date')
        a.innerText = '1400/7/2'
        a.style.fontFamily = 'IranYekan'

        var a = document.getElementById('sl_2_subject')
        a.innerText = 'مقدمه'
        a.style.fontFamily = 'IranYekan'

        var a = document.getElementById('sl_2_instructors')
        a.innerText = ' دکتر صادق اسکندری'
        a.style.fontFamily = 'IranYekan'


        var a = document.getElementById('sl_3_date')
        a.innerText = '1400/7/6'
        a.style.fontFamily = 'IranYekan'

        var a = document.getElementById('sl_3_subject')
        a.innerText = 'مقدمات پایتون'
        a.style.fontFamily = 'IranYekan'

        var a = document.getElementById('sl_3_instructors')
        a.innerText = ' دکتر صادق اسکندری'
        a.style.fontFamily = 'IranYekan'

        var a = document.getElementById('sl_4_date')
        a.innerText = '1400/7/12'
        a.style.fontFamily = 'IranYekan'

        var a = document.getElementById('sl_4_subject')
        a.innerText = 'ساختار های کنترلی در پایتون'
        a.style.fontFamily = 'IranYekan'

        var a = document.getElementById('sl_4_instructors')
        a.innerText = ' دکتر صادق اسکندری'
        a.style.fontFamily = 'IranYekan'

        var a = document.getElementById('sl_5_date')
        a.innerText = '1400/8/3'
        a.style.fontFamily = 'IranYekan'

        var a = document.getElementById('sl_5_subject')
        a.innerText = 'توابع در پایتون'
        a.style.fontFamily = 'IranYekan'

        var a = document.getElementById('sl_5_instructors')
        a.innerText = ' دکتر صادق اسکندری'
        a.style.fontFamily = 'IranYekan'

        var a = document.getElementById('sl_6_date')
        a.innerText = '1400/8/7'
        a.style.fontFamily = 'IranYekan'

        var a = document.getElementById('sl_6_subject')
        a.innerText = 'حل تمرین های سری اول'
        a.style.fontFamily = 'IranYekan'

        var a = document.getElementById('sl_6_instructors')
        a.innerText = ' فائزه رحمتی / امیر صابرحبیبی / کیان رضایی'
        a.style.fontFamily = 'IranYekan'

        var a = document.getElementById('sl_7_date')
        a.innerText = '1400/8/20'
        a.style.fontFamily = 'IranYekan'

        var a = document.getElementById('sl_7_subject')
        a.innerText = 'حل چند تمرین از ساختار های کنترلی و توابع'
        a.style.fontFamily = 'IranYekan'

        var a = document.getElementById('sl_7_instructors')
        a.innerText = ' کیان رضایی'
        a.style.fontFamily = 'IranYekan'

        var a = document.getElementById('sl_8_date')
        a.innerText = '1400/8/21'
        a.style.fontFamily = 'IranYekan'

        var a = document.getElementById('sl_8_subject')
        a.innerText = 'توابع بازگشتی'
        a.style.fontFamily = 'IranYekan'

        var a = document.getElementById('sl_8_instructors')
        a.innerText = 'دکتر صادق اسکندری'
        a.style.fontFamily = 'IranYekan'

        var a = document.getElementById('sl_9_date')
        a.innerText = '1400/8/24'
        a.style.fontFamily = 'IranYekan'

        var a = document.getElementById('sl_9_subject')
        a.innerText = 'کلاس آنلاین حل تمرین'
        a.style.fontFamily = 'IranYekan'

        var a = document.getElementById('sl_9_instructors')
        a.innerText = 'عرفان محرم زاده / مهرشاد داداش زاده / کیان رضایی'
        a.style.fontFamily = 'IranYekan'

        var a = document.getElementById('sl_10_date')
        a.innerText = '1400/8/22'
        a.style.fontFamily = 'IranYekan'

        var a = document.getElementById('sl_10_subject')
        a.innerText = 'حل تمرین های سری دوم'
        a.style.fontFamily = 'IranYekan'

        var a = document.getElementById('sl_10_instructors')
        a.innerText = 'امیرحسین رحیمی / سارا مظاهری'
        a.style.fontFamily = 'IranYekan'

        var a = document.getElementById('ref1')
        a.innerText = 'برنامه نویسی پایتون: مقدمه ای بر علوم کامپیوتر'
        a.style.fontFamily = 'IranYekan'

        var a = document.getElementById('ref2')
        a.innerText = ' چگونه مانند یک دانشمند کامپیوتر فکر کنیم'
        a.style.fontFamily = 'IranYekan'


        var a = document.getElementById('12')
        a.innerText = 'رئوس مطالب'

        var a = document.getElementById('12.5')
        a.style.direction = "rtl"

        var a = document.getElementById('12.75')
        a.innerText = 'محتویات'
        a.style.fontFamily = 'IranYekan'

        var s = document.getElementsByTagName('th');
        for (i = 0; i < s.length; i++) {
            s[i].style.fontFamily = 'IranYekan';
        }

        var s = document.getElementsByTagName('td');
        for (i = 0; i < s.length; i++) {
            s[i].style.fontFamily = 'IranYekan';
        }

        var a = document.getElementById('13')
        a.innerText = 'شماره'

        var a = document.getElementById('14')
        a.innerText = 'تاریخ'

        var a = document.getElementById('15')
        a.innerText = 'موضوع جلسه'

        var a = document.getElementById('16')
        a.innerText = 'مدرس(ها)'

        var a = document.getElementById('17')
        a.innerText = 'لینک'

        var a = document.getElementById('18')
        a.innerText = 'منابع'
        a.style.fontFamily = 'IranYekan'

        var a = document.getElementById('19')
        a.innerText = 'اگرچه منبع منحصر به فردی برای برنامه نویسی پیشرفته مورد استفاده قرار نخواهد گرفت ولی کتاب های زیر میتوانند برای این درس مفید باشند.'
        a.style.fontFamily = 'IranYekan'
        a.style.direction = "rtl"

        var a = document.getElementById('20')
        a.innerText = 'جزئیات نمره'
        a.style.fontFamily = 'IranYekan'

        var a = document.getElementById('21')
        a.innerText = 'میانترم : 4 نمره'
        a.style.fontFamily = 'IranYekan'

        var a = document.getElementById('22')
        a.innerText = ' پایانترم :  10 نمره'
        a.style.fontFamily = 'IranYekan'

        var a = document.getElementById('23')
        a.innerText = 'پروژه نهایی : 3 نمره'
        a.style.fontFamily = 'IranYekan'

        var a = document.getElementById('24')
        a.innerText = 'تمرین ها : 1 نمره (به ازای هر یک)'
        a.style.fontFamily = 'IranYekan'
    } catch { }

    //TAT - per
    try {
        var a = document.getElementById('titleTA')
        a.innerText = 'تیم حل تمرین'
        a.style.fontFamily = 'IranYekan'

        var a = document.getElementById('kiyan')
        a.innerHTML = 'کیان<br>رضایی'
        a.style.fontFamily = 'IranYekan'

        var a = document.getElementById('headta')
        a.innerText = 'مسئول کمک مدرسین'
        a.style.fontFamily = 'IranYekan'

        var a = document.getElementById('email0')
        a.innerText = 'ایمیل'
        a.style.fontFamily = 'IranYekan'

        var a = document.getElementById('ta1')
        a.innerText = 'کمک مدرس'
        a.style.fontFamily = 'IranYekan'

        var a = document.getElementById('email1')
        a.innerText = 'ایمیل'
        a.style.fontFamily = 'IranYekan'

        var a = document.getElementById('ta2')
        a.innerText = 'کمک مدرس'
        a.style.fontFamily = 'IranYekan'

        var a = document.getElementById('email2')
        a.innerText = 'ایمیل'
        a.style.fontFamily = 'IranYekan'

        var a = document.getElementById('ta3')
        a.innerText = 'کمک مدرس'
        a.style.fontFamily = 'IranYekan'

        var a = document.getElementById('email3')
        a.innerText = 'ایمیل'
        a.style.fontFamily = 'IranYekan'

        var a = document.getElementById('ta4')
        a.innerText = 'کمک مدرس'
        a.style.fontFamily = 'IranYekan'

        var a = document.getElementById('email4')
        a.innerText = 'ایمیل'
        a.style.fontFamily = 'IranYekan'

        var a = document.getElementById('ta5')
        a.innerText = 'کمک مدرس'
        a.style.fontFamily = 'IranYekan'

        var a = document.getElementById('email5')
        a.innerText = 'ایمیل'
        a.style.fontFamily = 'IranYekan'

        var a = document.getElementById('ta6')
        a.innerText = 'کمک مدرس'
        a.style.fontFamily = 'IranYekan'

        var a = document.getElementById('email6')
        a.innerText = 'ایمیل'
        a.style.fontFamily = 'IranYekan'

        var a = document.getElementById('ta7')
        a.innerText = 'کمک مدرس'
        a.style.fontFamily = 'IranYekan'

        var a = document.getElementById('email7')
        a.innerText = 'ایمیل'
        a.style.fontFamily = 'IranYekan'

        var a = document.getElementById('ta8')
        a.innerText = 'کمک مدرس'
        a.style.fontFamily = 'IranYekan'

        var a = document.getElementById('email8')
        a.innerText = 'ایمیل'
        a.style.fontFamily = 'IranYekan'

        var a = document.getElementById('erfan')
        a.innerHTML = 'عرفان<br>محرم زاده'
        a.style.fontFamily = 'IranYekan'

        var a = document.getElementById('amir')
        a.innerHTML = 'امیر<br>اصغری'
        a.style.fontFamily = 'IranYekan'

        var a = document.getElementById('mehrshad')
        a.innerHTML = 'علی<br>داداش زاده'
        a.style.fontFamily = 'IranYekan'

        var a = document.getElementById('sara')
        a.innerHTML = 'سارا<br>مظاهری'
        a.style.fontFamily = 'IranYekan'

        var a = document.getElementById('rahimi')
        a.innerHTML = 'امیرحسین<br>رحیمی'
        a.style.fontFamily = 'IranYekan'

        var a = document.getElementById('morteza')
        a.innerHTML = 'مرتضی<br>ضیابخش'
        a.style.fontFamily = 'IranYekan'

        var a = document.getElementById('amirmohammad')
        a.innerHTML = 'امیرمحمد<br>صابرحبیبی'
        a.style.fontFamily = 'IranYekan'

        var a = document.getElementById('faeze')
        a.innerHTML = 'فائزه<br>رحمتی'
        a.style.fontFamily = 'IranYekan'
    } catch { }

    //homework - per
    try {
        var a = document.getElementById('titleHomework')
        a.innerText = 'تمرین ها'
        a.style.fontFamily = 'IranYekan'

        var a = document.getElementById('exer')
        a.innerText = 'تمرین ها'
        a.style.fontFamily = 'IranYekan'

        var a = document.getElementById('notes')
        a.innerText = 'نکات'
        a.classList.add('persian')
        a.style.textAlign = 'right'

        var a = document.getElementById('notes_')
        a.classList.add('persian')
        a.style.direction = "rtl"

        var a = document.getElementById('li1')
        a.innerText = 'تمرین ها به صورت انفرادی میباشند.'
        a.classList.add('persian')
        a.style.textAlign = 'right'

        var a = document.getElementById('li2')
        a.innerHTML = `برای ارسال پاسخ تمرین ها به  <a class="link" href="https://quera.ir/dashboard/" target="_blank">
                       وب سایت کوئرا</a> مراجعه کنید.`
        a.classList.add('persian')
        a.style.textAlign = 'right'

        var a = document.getElementById('li3')
        a.innerText = 'کپی برداری تمرین = نمره صفر'
        a.classList.add('persian')
        a.style.textAlign = 'right'

        var a = document.getElementById('table')
        a.style.direction = "rtl"

        var s = document.getElementsByTagName('th');
        for (i = 0; i < s.length; i++) {
            s[i].style.fontFamily = 'IranYekan';
        }

        var s = document.getElementsByTagName('td');
        for (i = 0; i < s.length; i++) {
            s[i].style.fontFamily = 'IranYekan';
        }

        var a = document.getElementById('13')
        a.innerText = 'شماره'

        var a = document.getElementById('14')
        a.innerText = 'فایل ها'

        var a = document.getElementById('15')
        a.innerText = 'تاریخ تحویل'

        var a = document.getElementById('16')
        a.innerText = 'نمرات'

        var a = document.getElementById('hw1_number')
        a.innerText = '1'

        var a = document.getElementById('hw1_file')
        a.innerText = 'تمرین شماره یک'

        var a = document.getElementById('hw1_date')
        a.innerText = '1400/8/3'

        var a = document.getElementById('hw1_score')
        a.innerText = 'نمرات تمرین شماره یک'

        var a = document.getElementById('hw2_number')
        a.innerText = '2'

        var a = document.getElementById('hw2_file')
        a.innerText = 'تمرین شماره دو'

        var a = document.getElementById('hw2_date')
        a.innerText = '1400/8/22'

        var a = document.getElementById('hw2_score')
        a.innerText = 'نمرات تمرین شماره دو'

111
    } catch { }

    //project - per
    try {
        for (i = 1000; i < 1012; i++) {
            var a = document.getElementById(i.toString())
            a.style.fontFamily = 'IranYekan'
        }

        var a = document.getElementById('title-project')
        a.innerText = 'پروژه های پایانی'

        var a = document.getElementById('1000')
        a.innerText = 'پروژه های پایانی'

        var a = document.getElementById('notes')
        a.innerText = 'نکات'
        a.style.fontFamily = 'IranYekan'
        a.style.textAlign = 'right'

        var a = document.getElementById('notes_')
        a.style.direction = "rtl"

        var a = document.getElementById('1001')
        a.innerText = `پروژه های پایانی حتما باید با استفاده از مفاهیم شیء گرایی انجام شود . در زمان تحویل API ها از شما اخذ خواهد شد.`
        a.style.textAlign = 'justify'

        var a = document.getElementById('1002')
        a.innerText = `استفاده از مفاهیم خارج از درس گفته شده به شرط تسلط به مطلب بلامانع است.`
        a.style.textAlign = 'justify'


        var a = document.getElementById('1003')
        a.innerText = `حتما در زمان تحویل پروژه یک فایل شامل توضیحات کامل پروژه (توضیح خط به خط نیاز نمی باشد) آماده کنید.`
        a.style.textAlign = 'justify'


        var a = document.getElementById('1004')
        a.innerText = `استفاده از ظاهر گرافیکی اجباری میباشد.`
        a.style.textAlign = 'justify'


        var a = document.getElementById('1005')
        a.innerText = `کپی بودن پروژه کاملا ملموس خواهد بود . در صورتی که پروژه کپی باشد نمره درس ، صفر منظور میگردد.`
        a.style.textAlign = 'justify'

        //project
        var a = document.getElementById('1006')
        a.innerText = `پروژه اول`


        var a = document.getElementById('1007')
        a.innerText = `فروشگاه آنلاین`

        var a = document.getElementById('1008')
        a.innerText = `اطلاعات بیشتر`


        var a = document.getElementById('1009')
        a.innerText = `پروژه دوم`


        var a = document.getElementById('1010')
        a.innerText = `بازی جاذبه نینجا`


        var a = document.getElementById('1011')
        a.innerText = `اطلاعات بیشتر`

    } catch { }
}

function translateToEnglish() {
    var a = document.getElementById('per')
    a.classList.remove('persian')
    a.style.fontFamily = "Comic Sans MS"
    a.innerHTML = 'Persian'
    var a = document.getElementById('en')
    a.classList.remove('persian')
    a.style.fontFamily = "Comic Sans MS"
    a.innerHTML = 'English'
    //header
    var a = document.getElementById('1')
    a.classList.remove('persian')
    a.innerHTML = `Advanced Programming 2021-22 / Fall semester
                <br>
                <div class="credits">
                <h4 style="font-size: calc(3px + 0.5vw + 0.5vh);">Guilan University - Faculty of Mathematics</h4>
                </div>
            </h2>`

    //main - en
    try {
        var a = document.getElementById('0')
        a.innerText = 'Advanced Programming'


        var a = document.getElementById('2')
        a.classList.remove('persian')
        a.innerHTML = `Instructor: <a class="link"
        href="https://staff.guilan.ac.ir/eskandari/" target="_blank">Dr. Sadegh Eskandari</a>`


        var a = document.getElementById('prevcourse1')
        a.classList.remove('persian')
        a.innerHTML = `Semester 982`
        a.style.fontFamily = "Comic Sans MS"

        var a = document.getElementById('prevcourse2')
        a.classList.remove('persian')
        a.innerHTML = `Semester 991`
        a.style.fontFamily = "Comic Sans MS"

        var a = document.getElementById('prevcourse3')
        a.classList.remove('persian')
        a.innerHTML = `Semester 992`
        a.style.fontFamily = "Comic Sans MS"

        var a = document.getElementById('3')
        a.classList.remove('persian')
        a.style.direction = "ltr"
        a.innerHTML = `Nowadays, programming is one of the most needed skills. In this course, we'll learn some topics of
      advanced programming. Object-Oriented programming, data structure and algorithm analysis are the most important
      ones.
      Although all of these topics are independent of a special programming language, we use one of the most
      liked
      programming
      languages, which is <a class="link" href="https://www.python.org/" target="_blank">Python!</a> We chose Python
      because it's simple and open source. In this
      course,
      most of our focus
      is on your Teamwork and programming activities. You'll learn Object-Oriented programming, and you'll have to
      implement a project as a final Teamwork result. At the end you'll be expected to write classes, use data
      structures and
      design a graphical user
      interface for your project.
      For more information visit the <a class="link"
        href="./pages/syllabus.html">Syllabus</a> page.`

        var a = document.getElementById('4')
        a.classList.remove('persian')
        a.innerHTML = `Syllabus`

        var a = document.getElementById('5')

        a.classList.remove('persian')
        a.innerHTML = `Uploaded files and more information about resources of this lesson and scoring details`

        var a = document.getElementById('6')
        a.classList.remove('persian')
        a.innerHTML = `Teaching Assistants Team`

        var a = document.getElementById('7')
        a.classList.remove('persian')
        a.innerHTML = `A list of this semester Teaching assistants and contacting information`

        var a = document.getElementById('8')
        a.classList.remove('persian')
        a.innerHTML = `Final Projects`

        var a = document.getElementById('9')
        a.classList.remove('persian')
        a.innerHTML = `Your final projects which you have to implement one of them for the end`

        var a = document.getElementById('10')
        a.classList.remove('persian')
        a.innerHTML = `Homework`

        var a = document.getElementById('11')
        a.classList.remove('persian')
        a.innerHTML = `More information about Exercises and their deadlines`
    } catch { }

    //syllabus - en
    try {

        var a = document.getElementById('sl_1_date')
        a.innerText = '2021-09-08'
        a.style.fontFamily = 'IranYekan'

        var a = document.getElementById('sl_1_subject')
        a.innerText = 'Prerequisite'
        a.style.fontFamily = 'IranYekan'

        var a = document.getElementById('sl_1_instructors')
        a.innerText = ' Amir Asqari / Sara Mazeheri / Ali Dadashzade / Kiyan Rezaee'
        a.style.fontFamily = 'IranYekan'

        var a = document.getElementById('sl_2_date')
        a.innerText = '2021-9-24'
        a.style.fontFamily = 'IranYekan'

        var a = document.getElementById('sl_2_subject')
        a.innerText = 'Introduction'
        a.style.fontFamily = 'IranYekan'

        var a = document.getElementById('sl_2_instructors')
        a.innerText = 'Dr.Sadegh Eskandari'
        a.style.fontFamily = 'IranYekan'

        var a = document.getElementById('sl_3_date')
        a.innerText = '2021-9-28'
        a.style.fontFamily = 'IranYekan'

        var a = document.getElementById('sl_3_subject')
        a.innerText = 'Python Basics'
        a.style.fontFamily = 'IranYekan'

        var a = document.getElementById('sl_3_instructors')
        a.innerText = 'Dr.Sadegh Eskandari'
        a.style.fontFamily = 'IranYekan'

        var a = document.getElementById('sl_4_date')
        a.innerText = '2021-10-4'
        a.style.fontFamily = 'IranYekan'

        var a = document.getElementById('sl_4_subject')
        a.innerText = 'Control Structures in Python'
        a.style.fontFamily = 'IranYekan'

        var a = document.getElementById('sl_4_instructors')
        a.innerText = 'Dr.Sadegh Eskandari'
        a.style.fontFamily = 'IranYekan'

        var a = document.getElementById('sl_5_date')
        a.innerText = '2021-10-25'
        a.style.fontFamily = 'IranYekan'

        var a = document.getElementById('sl_5_subject')
        a.innerText = 'ّFunctions'
        a.style.fontFamily = 'IranYekan'

        var a = document.getElementById('sl_5_instructors')
        a.innerText = 'Dr.Sadegh Eskandari'
        a.style.fontFamily = 'IranYekan'

        var a = document.getElementById('sl_6_date')
        a.innerText = '2021-10-29'
        a.style.fontFamily = 'IranYekan'

        var a = document.getElementById('sl_6_subject')
        a.innerText = 'ّSolve Exercise Number One'
        a.style.fontFamily = 'IranYekan'

        var a = document.getElementById('sl_6_instructors')
        a.innerText = 'Faeze Rahmati / Amir Saberhabibi / Kiyan Rezaee'
        a.style.fontFamily = 'IranYekan'

        var a = document.getElementById('sl_7_date')
        a.innerText = '2021-11-11'
        a.style.fontFamily = 'IranYekan'

        var a = document.getElementById('sl_7_subject')
        a.innerText = 'ّExercise (Control Structure & Functions)'
        a.style.fontFamily = 'IranYekan'

        var a = document.getElementById('sl_7_instructors')
        a.innerText = 'Kiyan Rezaee'
        a.style.fontFamily = 'IranYekan'

        var a = document.getElementById('sl_8_date')
        a.innerText = '2021-11-12'
        a.style.fontFamily = 'IranYekan'

        var a = document.getElementById('sl_8_subject')
        a.innerText = 'ّRecursion'
        a.style.fontFamily = 'IranYekan'

        var a = document.getElementById('sl_8_instructors')
        a.innerText = 'Dr.Sadegh Eskandari'
        a.style.fontFamily = 'IranYekan'

        var a = document.getElementById('sl_9_date')
        a.innerText = '2021-11-13'
        a.style.fontFamily = 'IranYekan'

        var a = document.getElementById('sl_9_subject')
        a.innerText = 'ّOnline Class'
        a.style.fontFamily = 'IranYekan'

        var a = document.getElementById('sl_9_instructors')
        a.innerText = 'Erfan Moharamzade / Mehrshad dadashzade / Kiyan rezaee'
        a.style.fontFamily = 'IranYekan'

        var a = document.getElementById('sl_10_date')
        a.innerText = '2021-11-13'
        a.style.fontFamily = 'IranYekan'

        var a = document.getElementById('sl_10_subject')
        a.innerText = 'ّSolve Exercise Number Two'
        a.style.fontFamily = 'IranYekan'

        var a = document.getElementById('sl_10_instructors')
        a.innerText = 'Amirhossien Rahimi / Sara Mazaheri'
        a.style.fontFamily = 'IranYekan'

        var a = document.getElementById('ref1')
        a.innerText = 'Python Programming: An Introduction to Computer Science'
        a.classList.remove('persian')

        var a = document.getElementById('ref2')
        a.innerText = 'How to Think Like a Computer Scientist: Learning with Python'
        a.classList.remove('persian')

        var a = document.getElementById('12')
        a.innerText = `Syllabus`

        var a = document.getElementById('12.5')
        a.style.direction = "ltr"

        var a = document.getElementById('12.75')
        a.classList.remove('persian')
        a.style.fontFamily = "Comic Sans MS"
        a.innerHTML = `Contents`

        var s = document.getElementsByTagName('th');
        for (i = 0; i < s.length; i++) {
            s[i].style.fontFamily = 'Consolas';
        }

        var s = document.getElementsByTagName('td');
        for (i = 0; i < s.length; i++) {
            s[i].style.fontFamily = 'Arial';
        }

        var a = document.getElementById('13')
        a.innerHTML = `Number`

        var a = document.getElementById('14')
        a.innerHTML = `Date`

        var a = document.getElementById('15')
        a.innerHTML = `Subject`

        var a = document.getElementById('16')
        a.innerHTML = `Instructor(s)`

        var a = document.getElementById('17')
        a.innerHTML = `link`

        var a = document.getElementById('18')
        a.classList.remove('persian')
        a.style.fontFamily = "Comic Sans MS"
        a.innerHTML = `Resources`

        var a = document.getElementById('19')
        a.classList.remove('persian')
        a.style.fontFamily = "Consolas"
        a.innerHTML = `Although we don't use any resource books for this course, it has been recommended to you read these books below.`
        a.style.direction = "ltr"

        var a = document.getElementById('20')
        a.classList.remove('persian')
        a.style.fontFamily = "Comic Sans MS"
        a.innerHTML = `Scoring Details`

        var a = document.getElementById('21')
        a.classList.remove('persian')
        a.style.fontFamily = "Consolas"
        a.innerHTML = `Midterm: 4 point`

        var a = document.getElementById('22')
        a.classList.remove('persian')
        a.style.fontFamily = "Consolas"
        a.innerHTML = `Final Exam: 10 point`

        var a = document.getElementById('23')
        a.classList.remove('persian')
        a.style.fontFamily = "Consolas"
        a.innerHTML = `Project: 3 point`

        var a = document.getElementById('24')
        a.classList.remove('persian')
        a.style.fontFamily = "Consolas"
        a.innerHTML = `Exercises: 1 point (for each)`
    } catch { }

    //TAT - en
    try {
        var a = document.getElementById('titleTA')
        a.innerText = 'Teaching Assistants Team'
        a.style.fontFamily = 'Segoe UI'

        var a = document.getElementById('kiyan')
        a.innerHTML = 'Kiyan<br>Rezaee'
        a.style.fontFamily = 'Segoe UI'

        var a = document.getElementById('headta')
        a.innerText = 'Head Teaching Assistant'
        a.style.fontFamily = 'Segoe UI'

        var a = document.getElementById('email0')
        a.innerText = 'Email'
        a.style.fontFamily = 'Segoe UI'

        var a = document.getElementById('ta1')
        a.innerText = 'Teaching Assistant'
        a.style.fontFamily = 'Segoe UI'

        var a = document.getElementById('email1')
        a.innerText = 'Email'
        a.style.fontFamily = 'Segoe UI'

        var a = document.getElementById('ta2')
        a.innerText = 'Teaching Assistant'
        a.style.fontFamily = 'Segoe UI'

        var a = document.getElementById('email2')
        a.innerText = 'Email'
        a.style.fontFamily = 'Segoe UI'

        var a = document.getElementById('ta3')
        a.innerText = 'Teaching Assistant'
        a.style.fontFamily = 'Segoe UI'

        var a = document.getElementById('email3')
        a.innerText = 'Email'
        a.style.fontFamily = 'Segoe UI'

        var a = document.getElementById('ta4')
        a.innerText = 'Teaching Assistant'
        a.style.fontFamily = 'Segoe UI'

        var a = document.getElementById('email4')
        a.innerText = 'Email'
        a.style.fontFamily = 'Segoe UI'

        var a = document.getElementById('ta5')
        a.innerText = 'Teaching Assistant'
        a.style.fontFamily = 'Segoe UI'

        var a = document.getElementById('email5')
        a.innerText = 'Email'
        a.style.fontFamily = 'Segoe UI'

        var a = document.getElementById('ta6')
        a.innerText = 'Teaching Assistant'
        a.style.fontFamily = 'Segoe UI'

        var a = document.getElementById('email6')
        a.innerText = 'Email'
        a.style.fontFamily = 'Segoe UI'

        var a = document.getElementById('ta7')
        a.innerText = 'Teaching Assistant'
        a.style.fontFamily = 'Segoe UI'

        var a = document.getElementById('email7')
        a.innerText = 'Email'
        a.style.fontFamily = 'Segoe UI'

        var a = document.getElementById('ta8')
        a.innerText = 'Teaching Assistant'
        a.style.fontFamily = 'Segoe UI'

        var a = document.getElementById('email8')
        a.innerText = 'Email'
        a.style.fontFamily = 'Segoe UI'

        var a = document.getElementById('erfan')
        a.innerHTML = 'Erfan<br>Moharamzadeh'
        a.style.fontFamily = 'Segoe UI'

        var a = document.getElementById('amir')
        a.innerHTML = 'Amir<br>Asghari'
        a.style.fontFamily = 'Segoe UI'

        var a = document.getElementById('mehrshad')
        a.innerHTML = 'Ali<br>Dadashzadeh'
        a.style.fontFamily = 'Segoe UI'

        var a = document.getElementById('sara')
        a.innerHTML = 'Sara<br>Mazaheri'
        a.style.fontFamily = 'Segoe UI'

        var a = document.getElementById('rahimi')
        a.innerHTML = 'Amirhossien<br>Rahimi'
        a.style.fontFamily = 'Segoe UI'

        var a = document.getElementById('morteza')
        a.innerHTML = 'Morteza<br>Ziabakhsh'
        a.style.fontFamily = 'Segoe UI'

        var a = document.getElementById('amirmohammad')
        a.innerHTML = 'Amirmohammad<br>Saberhabibi'
        a.style.fontFamily = 'Segoe UI'

        var a = document.getElementById('faeze')
        a.innerHTML = 'Faeze<br>Rahmati'
        a.style.fontFamily = 'Segoe UI'
    } catch { }

    //homework - en
    try {
        var a = document.getElementById('titleHomework')
        a.innerText = 'Homework'
        a.style.fontFamily = 'Comic Sans MS'

        var a = document.getElementById('exer')
        a.innerText = 'Exercise'
        a.style.fontFamily = 'Comic Sans MS'

        var a = document.getElementById('notes')
        a.innerText = 'NOTES'
        a.classList.remove('persian')
        a.style.textAlign = 'left'

        var a = document.getElementById('notes_')
        a.classList.remove('persian')
        a.style.direction = "ltr"

        var a = document.getElementById('li1')
        a.innerText = 'All of the exercises must be done individually.'
        a.classList.remove('persian')
        a.style.textAlign = 'left'

        var a = document.getElementById('li2')
        a.classList.remove('persian')
        a.innerHTML = `You should submit your answers to problem sets on <a class="link" href="https://quera.ir/dashboard/" target="_blank">
                        Quera website</a>.`
        a.style.textAlign = 'left'

        var a = document.getElementById('li3')
        a.innerText = 'Copied answer equals 0 points for both sides.'
        a.classList.remove('persian')
        a.style.textAlign = 'left'

        var a = document.getElementById('table')
        a.style.direction = "ltr"

        var s = document.getElementsByTagName('th');
        for (i = 0; i < s.length; i++) {
            s[i].style.fontFamily = 'Consolas';
        }

        var s = document.getElementsByTagName('td');
        for (i = 0; i < s.length; i++) {
            s[i].style.fontFamily = 'Arial';
        }

        var a = document.getElementById('13')
        a.innerText = 'Number'

        var a = document.getElementById('14')
        a.innerText = 'Files'

        var a = document.getElementById('15')
        a.innerText = 'Deadline'

        var a = document.getElementById('16')
        a.innerText = 'Scores'

        var a = document.getElementById('hw1_number')
        a.innerText = '1'

        var a = document.getElementById('hw1_file')
        a.innerText = 'First Exercise'

        var a = document.getElementById('hw1_date')
        a.innerText = '2021/10/25'

        var a = document.getElementById('hw1_score')
        a.innerText = 'ّFirst Exercise Scores'

        var a = document.getElementById('hw2_number')
        a.innerText = '2'

        var a = document.getElementById('hw2_file')
        a.innerText = 'ُSecond Exercise'

        var a = document.getElementById('hw2_date')
        a.innerText = '2021/11/15'

        var a = document.getElementById('hw2_score')
        a.innerText = 'ّSecond Exercise Scores'


    } catch { }

    //project - en
    try {
        for (i = 1000; i < 1012; i++) {
            var a = document.getElementById(i.toString())
            a.style.fontFamily = 'Consolas'
        }
        var a = document.getElementById('title-project')
        a.innerText = 'Final Projects'


        var a = document.getElementById('1000')
        a.innerText = 'Final Projects'
        a.style.fontFamily = 'Comic Sans MS'


        var a = document.getElementById('notes')
        a.innerText = 'NOTES'
        a.style.textAlign = 'justify'
        a.style.fontFamily = 'Consolas'

        var a = document.getElementById('notes_')
        a.style.direction = "ltr"


        var a = document.getElementById('1001')
        a.innerText = `You should use Object-Oriented programming in your project and the application program interfaces (API) will be taken.`
        a.style.textAlign = 'justify'


        var a = document.getElementById('1002')
        a.innerText = `You're not limited to taught topics for your project, You can use them only if you know them well.`
        a.style.textAlign = 'justify'


        var a = document.getElementById('1003')
        a.innerText = `Prepare an explanation file for your project (no need to explain every line).`
        a.style.textAlign = 'justify'


        var a = document.getElementById('1004')
        a.innerText = `You'll have to design a graphical user interface (GUI) for your project.`
        a.style.textAlign = 'justify'


        var a = document.getElementById('1005')
        a.innerText = `In case we find out that you copied your project your score will be 0. Copied projects are clear as a sun!`
        a.style.textAlign = 'justify'


        //project
        var a = document.getElementById('1006')
        a.innerText = `Project One`


        var a = document.getElementById('1007')
        a.innerText = `Online shop`

        var a = document.getElementById('1008')
        a.innerText = `More information`


        var a = document.getElementById('1009')
        a.innerText = `Project two`


        var a = document.getElementById('1010')
        a.innerText = `Gravity Ninja`


        var a = document.getElementById('1011')
        a.innerText = `More information`
    } catch { }
}

window.onload = function () {
    if (isPersian)
        translateToPersian()
    else
        translateToEnglish()
}

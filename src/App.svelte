<script lang="ts">
  import screen1 from "./assets/images/library.png";
  import screen2 from "./assets/images/reader.png";
  import screen3 from "./assets/images/reader_focused.png";
</script>

<main class="w-full h-screen font-grotesque">
  <header class="w-full bg-gradient-to-b from-purple-200 to-white flex items-center content-center justify-center px-10 py-2">
    <div class="container mx-auto py-16 px-4 sm:px-0">
      <nav class="flex flex-wrap justify-center">
        <div class="px-5 py-2">
          <a href="/" class="text-base text-gray-500 hover:text-gray-900 font-medium cursor-pointer transition">
            Home
          </a>
        </div>
        <div class="px-5 py-2">
          <a href="/download" class="text-base text-gray-500 hover:text-gray-900 font-medium cursor-pointer transition">
            Download
          </a>
        </div>
        <div class="px-5 py-2">
          <a href="/community" class="text-base text-gray-500 hover:text-gray-900 font-medium cursor-pointer transition">
            Community
          </a>
        </div>
      </nav>
      <div class="mt-12 flex flex-col items-center">
        <h1 class="text-4xl font-bold text-center mt-2">Vision</h1>
      </div>
      <h2 class="text-2xl font-medium text-center mt-1">
        Digital Comic / Manga Consumption
        <span class="relative">
          From the future
        </span>
      </h2>
      <div class="mt-8 flex justify-center space-x-3 mx-auto">
        <div class="inline-flex">
          <a href="/download" class="inline-flex items-center justify-center space-x-2 px-5 py-3 border border-transparent text-base font-medium rounded-md text-purple-700 bg-purple-100 hover:bg-purple-200">
            <span class="i-lucide:arrow-down-circle"/>
            <span>Get Vision</span>
          </a>
        </div>
      </div>
    </div>
  </header>
  <div class="container mx-auto px-4 sm:px-0" id="features">
    <div class="py-10 lg:py-20">
      <h3 class="text-3xl font-semibold flex items-center justify-center space-x-2">
        <span class="i-lucide:book-open text-purple-500"/>
        <span>Library</span>
      </h3>
      <p class="mt-2 text-center w-full sm:w-3/4 mx-auto px-4 sm:px-0">
        Issue and Collections <br/> Peak Organization
      </p>
      <div class="mt-6 lg:mt-12 max-w-4xl mx-auto">
        <img src={screen1} alt="library_showcase" class="max-w-full rounded-md overflow-hidden shadow-xl"/>
      </div>
    </div>
    <div class="py-10 lg:py-20">
      <h3 class="text-3xl font-semibold flex items-center justify-center space-x-2">
        <span class="i-lucide:book text-purple-500"/>
        <span>Reading</span>
      </h3>
      <p class="mt-2 text-center w-full sm:w-3/4 mx-auto px-4 sm:px-0">
        A reading experience Reimagined
      </p>
      <div class="mt-6 lg:mt-12 max-w-4xl mx-auto">
        <img src={screen2} alt="reader_showcase" class="max-w-full rounded-md overflow-hidden shadow-xl"/>
      </div>
    </div>
    <div class="py-10 lg:py-20">
      <h3 class="text-3xl font-semibold flex items-center justify-center space-x-2">
        <span class="i-lucide:eye-off text-purple-500"/>
        <span>Distraction Free Mode</span>
      </h3>
      <p class="mt-2 text-center w-full sm:w-3/4 mx-auto px-4 sm:px-0">
        Keyboard based navigation <br/> declutter your reading
      </p>
      <div class="mt-6 lg:mt-12 max-w-4xl mx-auto">
        <img src={screen3} alt="reader_showcase" class="max-w-full rounded-md overflow-hidden shadow-xl"/>
      </div>
    </div>
    <div class="py-10 lg:py-20">
      <h3 class="text-3xl font-semibold flex items-center justify-center space-x-2">
        <span class="i-lucide:coffee text-purple-500"/>
        <span>The Story Behind Vision</span>
      </h3>
      <div class="mt-6 lg:mt-8 lg:w-3/5 leading-relaxed lg:mx-auto w-prose">
        <p>
          Back in 2023 , I was in the middle of a gap year , and I was slowly getting back into a hobby of mine
          Comic Books , and not being able to get my hands on them physically , I had to read them digitally.
          Diving into the landscape of digital comic book consumption , I found it quite barren , not for any reason other than
          age.
          Apps for reading comic books on PC were old and janky , new ones weren't getting made so people were just fine using the ones
          available.The few new ones were isolated into certain software ecosystems like iOS.These , and the fact that the comic book landscape didn't have
          repositories like the anime/manga community , even finding the digital issues where daunting and so I decided , like the developer I am , that If noone would
          build it , I would.
        </p>
        <p>
          In my head , over a long period of time , <span class="text-purple-500">Project Horus</span> (as it was called) changed its' form
          many times.<br/>
          At a time , it was to be an aggregator , to scrape the web and consolidate comic book issues and information and give other developers access to build
          cool things with.
          It also took the form of a community for Enthusiasts to discover and share comic books with themselves and many others , too many to list.
          Then finally , I settled on the app you are considering while reading this (<span class="italic text-purple-300">hopefully</span>).
          A way for enthusiasts , who had trawled the internet to find their precious issues and were looking for a way to finally read and enjoy their time spent
        </p>
        <p>
          Vision , as it is now known , is a community that I would like to build , one where readers can be involved with each others reading , and the creators of the platform
          are readers and enjoyers as well , because the to build the best app , sometimes you have to be the one using it , and Use I have , from the very first successful build , I have
          used and tested this app , to bring it to a point I'm ready to show to people.The <span>Future</span> of the future , is entirely dependent on you , the user , while I have my idea
          of what the future of our community will be , only <span class="font-bold text-purple-500">You</span> can truly bring the future to us.
        </p>
        <!-- TODO add signature , for flare -->
      </div>
    </div>
     <div class="mx-auto text-center py-12 px-4 lg:py-32">
    <h2 class="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
      <span class="block">
        Ready to experience the <span class="text-purple-500">future</span> of Comic Consumption
      </span>
      <span class="block">Get Vision Today</span>
      <div class="inline-flex">
        <a href="/download" class=" mt-4 inline-flex items-center justify-center space-x-2 px-5 py-3 border border-transparent text-base font-medium rounded-md text-purple-700 bg-purple-100 hover:bg-purple-200">
          <span class="i-lucide:arrow-down-circle"/>
          <span>Download</span>
        </a>
      </div>
    </h2>
  </div>
  </div>
  <footer class="mt-12">
    <div class="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
      <nav class="mx-5 -my-2 flex flex-wrap justify-center" aria-label="footer">
        <div class="px-5 py-2">
          <a href="/" class="text-base text-gray-500 hover:text-gray-900">Home</a>
        </div>
        <div class="px-5 py-2">
          <a href="/download" class="text-base text-gray-500 hover:text-gray-900">
            Download
          </a>
        </div>
        <div class="px-5 py-2">
          <a href="/community" class="text-base text-gray-500 hover:text-gray-900">
            Community
          </a>
        </div>
        <div class="px-5 py-2">
          <a href="/community" class="text-base text-gray-500 hover:text-gray-900">
            EULA
          </a>
        </div>
        <div class="px-5 py-2">
          <a href="/community" class="text-base text-gray-500 hover:text-gray-900">
            Privacy Policy
          </a>
        </div>
      </nav>
      <p class="mt-8 text-center text-base text-gray-400">
        Developed By
        <a href="https://github.com/Inalegwu" class="text-base text-gray-400 hover:text-gray-900" target="_blank" rel="noreferrer">
          Ikwue Inalegwu
        </a>
        .
      </p>
    </div>
  </footer>
</main>
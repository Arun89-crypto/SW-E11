import heroImage from "../shared/assets/PNG/hero.png";
import child from "../shared/assets/PNG/child.png";
import edu from "../shared/assets/PNG/edu.png";
import teach from "../shared/assets/PNG/teach.png";

const Home = () => {
  return (
    <div className="">
      <div className="flex justify-around py-5 items-center">
        <div className="font-Roboto text-3xl"><span className="font-Old font-bold text-4xl">A</span>typical</div>
        <div className="flex justify-between gap-5 font-Roboto">
          <div className="">Home</div>
          <div className="">Leaderboard</div>
          <div className="">About Us</div>
        </div>
        <div>buttons</div>
      </div>
      <div className="mx-10">
        <img src={heroImage} alt="Hero" />
      </div>

      <div className=" text-gray-500 text-center text-xl w-3/5 mx-auto py-16">
        <strong>Autism spectrum disorder (ASD) </strong>is a developmental
        disability that can cause significant social, communication and
        behavioral challenges.
      </div>

      <div className="flex px-32 mt-20">
        <div className="">
          <img src={child} alt="Hero" />
        </div>
        <div className=" bg-gray-200 text-left text-black text-3xl font-regular w-9/12 px-36 py-10 font-Roboto leading-relaxed">
          <span className="font-Old font-bold text-6xl">A</span><span className="text-5xl font-medium">typical</span> is committed to help them &
          search for factors that can reduce the ASD, develop resources that
          help identify children with ASD as early as possible, and create a
          community which helps each other to win over Autism.{" "}
        </div>
      </div>

      <div className="flex flex-col justify-center items-center my-16 h-screen">
        <div className="text-5xl font-Roboto"><span className="font-Old font-bold text-6xl">A</span><span className="font-medium">typical</span> aim to provide assistance for</div>
        <div className="flex justify-around gap-4 mt-5 text-lg font-Roboto text-gray-500">
          <div className="">Behavioral Changes</div>
          <div className="">Developmental issue</div>
          <div className="">Social-Relation</div>
        </div>
      </div>

      <div className="flex justify-center">
        <div className=" text-gray-400 font-Roboto">therfore Atypical is equiped with</div>
      </div>
      <div className="flex justify-around text-2xl font-semibold my-10 font-Roboto">
        <div className="px-4 py-1 border-l-8 border-blue-500">DASHBOARD</div>
        <div className="px-4 py-1 border-l-8 border-blue-500">
          COMMUNITY SECTION
        </div>
        <div className="px-2 py-1 border-l-8 border-blue-500">LEADERBOARD</div></div>


      <div className="behaviour px-20 mt-52 mb-20">
        <div className="px-4 py-1 border-l-8 border-red-500 text-4xl font-semibold ml-12 mb-7 font-Roboto">Behavioral Changes</div>
        <div className="flex flex-col justify-center items-center border-2 border-black text-center py-10">
          <div className=" text-black opacity-30 font-semibold w-8/12 px-12 py-7 text-2xl font-Roboto">
            A notable behavioral assistance for people with ASD is called
            Applied Behavior Analysis (ABA). ABA encourages desired behaviors
            and discourages undesired behaviors to improve a variety of skills.
            Progress is tracked and measured.
          </div>
          <div className="flex flex-col mt-10 justify-center items-center gap-9 font-Roboto">
          <div className="text-black text-3xl font-medium">
          <span className="font-Old font-bold text-4xl">A</span><span className="font-medium">typical</span> provides dashboard which helps</div>
          <div className="text-black opacity-50 text-2xl px-20 w-8/12 font-medium font-Roboto">
            Step-by-step instructions to teach a desired behavior or response.
            Lessons are broken down into their simplest parts, and desired
            answers and behaviors are rewarded.
          </div>
          </div>
        </div>
      </div>

      <div className="behaviour px-20 mb-20">
        <div className="px-4 py-1 border-l-8 border-red-500 text-4xl font-semibold ml-12 mb-7">Developmental issue</div>
        <div className="flex flex-col justify-center items-center border-2 border-black text-center py-10">
          <div className=" text-black opacity-30 font-semibold w-8/12 px-12 py-7 text-2xl">
          Developmental approaches focus on improving specific developmental skills, such as language skills or physical skills, or a broader range of interconnected developmental abilities. Developmental approaches are often combined with behavioral approaches.
          </div>
          <div className="flex flex-col mt-10 justify-center items-center gap-9">
          <div className="text-black text-3xl font-medium">
          <span className="font-Old font-bold text-4xl">A</span><span className="font-medium">typical</span> Provides tasks on Dashboard & in Community Section</div>
          <div className="text-black opacity-50 text-2xl px-20 w-8/12 font-medium">
          Therapy for people with ASD is Speech and Language Therapy. Speech and Language Therapy helps to improve the person’s understanding and use of speech and language. 
          </div>
          </div>
        </div>
      </div>

      <div className="behaviour px-20 mb-20">
        <div className="px-4 py-1 border-l-8 border-red-500 text-4xl font-semibold ml-12 mb-7">Social-Relation</div>
        <div className="flex flex-col justify-center items-center border-2 border-black text-center py-10">
          <div className=" text-black opacity-30 font-semibold w-8/12 px-12 py-7 text-2xl">
          Social-relational treatments focus on improving social skills and building emotional bonds. It  involves activities that increase motivation, interest, and abilities to participate in shared social interactions.
          </div>
          <div className="flex flex-col mt-10 justify-center items-center gap-9">
          <div className="text-black text-3xl font-medium"><span className="font-Old font-bold text-4xl">A</span><span className="font-medium">typical</span> Provides Leader Board & Community Section</div>
          <div className="text-black opacity-50 text-2xl px-20 w-8/12 font-medium">
          Community section to follow the interests of the individual to expand opportunities for communication. It opportunities for people with ASD to practice social skills in a structured environment.
          </div>
          </div>
        </div>
      </div>


      <div className="flex justify-between px-10">
        <div className="p-10 w-2/6"><img src={edu} alt="Hero" /></div>
        <div className="flex flex-col justify-center items-center w-3/4 gap-7">
          <div className="font-Roboto text-2xl text-center">Serve as a Therapist on our website Write blogs, monitor activites, assist parents and help this community.</div>
          <div className="border-2 py-4 px-6 border-black">Log in As Therapist</div>
        </div>
        <div className="p-10 w-2/6"><img src={teach} alt="Hero" /></div>
      </div>
    </div>
  );
};

export default Home;

import { FaRoute, FaUsers } from "react-icons/fa";
import Banner from "../component/Banner";
import Brand from "../component/Brand";
import Button from "../component/Button";
import ProgressCircleContainer from "../component/CircleContainer";
import CommentContainer from "../component/CommentContainer";
import GalaryImageContainer from "../component/GalaryImageContainer";
import ImageSection from "../component/ImageSection";
import NewAritcalContainer from "../component/NewAritcalContainer";
import PlaceContainer from "../component/PlaceContainer";
import PopularDestination from "../component/PopularDestination";
import SearchContainer from "../component/SearchContainer";
import TextDescription from "../component/TextDescription";
import TextDestination from "../component/TextDestination";
import TextSection from "../component/TextSection";
import TourCategories from "../component/TourCategories";
import TourGuideContainer from "../component/TourGuideContainer";

export default function Home() {
  return (
    <>
      <section className="relative">
        <Banner />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
          <div>
            <SearchContainer />
          </div>
        </div>
      </section>
      <section>
        <div className="flex justify-center">
          <TourCategories />
        </div>
        <div className="flex justify-center mt-20">
          <PopularDestination />
        </div>
        <div className="w-full flex mt-30 justify-center">
          <div>
            <ImageSection />
          </div>
          <div className="ms-15">
            <div>
              <TextSection
                subtitle={"Let's Go Together"}
                title={"Plan Your Trip With us"}
                color={"#113D48"}
                fontSizeSubtitle={40}
                fontSizeTitle={48}
                width={320.31}
              />
            </div>
            <div className="mt-8">
              <TextDescription
                color="#6E7070"
                content="There are many variations of passages of available but the majority have suffered alteration in some form, by injected hum randomised words which don’t look even slightly."
              />
            </div>
            <div className="mt-8">
              <TextDestination
                icon={<FaRoute className="w-[32px] h-[32px]" />}
                content={
                  "There are many variations of passages of available but the majority."
                }
                title={"Exclusive Trip"}
              />
              <TextDestination
                icon={<FaUsers className="w-[32px] h-[32px]" />}
                content={
                  "There are many variations of passages of available but the majority."
                }
                title={"Professional Guide"}
              />
            </div>
            <div className="mt-5">
              <Button
                w={188.88}
                h={63.59}
                bgColor={"#113D48"}
                borderColor={"#113D48"}
                color={"#FFFFFF"}
                content={"Learn More"}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="box-border w-full h-[1042.67px]">
        <div className="text-center pt-[120px]">
          <TextSection
            subtitle={"Best Recommended Places"}
            title={"Popular Destination we offer for all"}
            color={"#113D48"}
            fontSizeSubtitle={40}
            fontSizeTitle={48}
          />
        </div>
        <div className="flex justify-center text-center mt-[21.68px] mb-[35px]">
          <TextDescription
            width={616.5}
            color="#113D48"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </div>
        <div className="flex justify-center">
          <PlaceContainer />
        </div>
      </section>
      <section className="w-full">
        <div className="text-center">
          <TextSection
            subtitle={"Make Your Tour More Pleasure"}
            title={"Recent Gallery"}
            color={"#113D48"}
            fontSizeSubtitle={40}
            fontSizeTitle={48}
          />
        </div>
        <div className="mt-4">
          <GalaryImageContainer />
        </div>
        <div className="flex justify-center gap-12 h-[704px] p-20">
          <div className="mt-44">
            <ProgressCircleContainer
              value="12"
              label="Years Experience"
              percentage={36}
            />
          </div>
          <div>
            <ProgressCircleContainer
              value="97%"
              label="Retention Rate"
              percentage={16}
            />
          </div>
          <div className="mt-44">
            <ProgressCircleContainer
              value="8k"
              label="Tour Completed"
              percentage={36}
            />
          </div>
          <div>
            <ProgressCircleContainer
              value="19k"
              label="Happy Travellers"
              percentage={16}
            />
          </div>
        </div>
      </section>
      <section className="w-full h-[854.02px] bg-[#E9F6F9]">
        <div className="text-center pt-[120px]">
          <TextSection
            subtitle={"Meet with Guide"}
            title={"Tour Guide"}
            color={"#113D48"}
            fontSizeSubtitle={40}
            fontSizeTitle={48}
          />
        </div>
        <div className="w-full h-[515.33px] mt-4">
          <TourGuideContainer />
        </div>
      </section>
      <section className="w-full h-[966.89px] pt-[120px]">
        <div className="text-center">
          <TextSection
            subtitle={"Testimonial"}
            title={"What Client Say About us"}
            color={"#113D48"}
            fontSizeSubtitle={40}
            fontSizeTitle={48}
          />
        </div>
        <div className="mt-7 h-[774.2px]">
          <CommentContainer />
        </div>
      </section>
      <section>
        <div className="mb-[120px] flex justify-center">
          <Brand />
        </div>
      </section>
      <section className="w-full h-[951.52px] flex flex-col justify-center items-center bg-[#E9F6F9]">
        <div className="w-[1344px] flex justify-between">
          <div>
            <TextSection
              subtitle={"About Us Restaurant"}
              title={"News & Articles From Tourm"}
              color={"#113D48"}
              fontSizeSubtitle={40}
              fontSizeTitle={48}
            />
          </div>
          <div className="mt-auto">
            <Button
              w={218.27}
              h={56}
              bgColor={""}
              borderColor={"#113D48"}
              color={"#113D48"}
              content={"See More Articles"}
            />
          </div>
        </div>
        <div className="mt-[88.69px] w-[1344px] flex justify-between">
          <NewAritcalContainer />
        </div>
      </section>
    </>
  );
}

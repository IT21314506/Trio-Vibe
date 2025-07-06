import React from "react";


const About = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5">
      <img src={img} alt="img" />

      <div className="space-y-4 lg:pt-14">
        <h1 className="font-semibold text-4xl text-center md:text-start">
          Why Choose Us?
        </h1>
        <p>
          “Where the ocean meets your plate—welcome to paradise served fresh.” Nestled along the sun-kissed shores of Kudawella, our beach restaurant offers more than just a meal—it’s a sensory escape. From the scent of sea breeze to the rhythm of waves, every bite is infused with coastal charm and Sri Lankan warmth. Whether it’s a candlelit dinner under the stars or a vibrant sunset cocktail, we bring flavor, serenity, and joy together on the sand.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi,
          suscipit reiciendis accusamus recusandae eum aspernatur pariatur odit
          veritatis facere. Magnam!
        </p>
        <div className="flex justify-center lg:justify-start">
          <Button title="Learn More" />
        </div>
      </div>
    </div>
  );
};

export default About;
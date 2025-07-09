import { v4 as uuidv4 } from "uuid";

import cleaner from "../../assets/cleaner.jpg";
import drill from "../../assets/cordless-drill.jpg";
import electrician from "../../assets/electrician.jpg";
import mechanic from "../../assets/mechanic.jpg";
import plumber from "../../assets/plumber.jpg";
import acTechnician from "../../assets/technician.jpg";

const jobs = [
  {
    id: uuidv4(),
    job: "Carpentry",
    image: drill,
  },
  {
    id: uuidv4(),
    job: "Mechanics",
    image: mechanic,
  },
  {
    id: uuidv4(),
    job: "Electrical repairs",
    image: electrician,
  },
  {
    id: uuidv4(),
    job: "Plumbing services",
    image: plumber,
  },
  {
    id: uuidv4(),
    job: "Cleaning services",
    image: cleaner,
  },
  {
    id: uuidv4(),
    job: "AC repairer",
    image: acTechnician,
  },
];

function Job({ jobItem }) {
  const { job, image } = jobItem;
  return (
    <li className="rounded-2xl min-h-4 w-full">
      <article className="mx-4">
        <img
          src={image}
          alt="img"
          className="w-fit h-35 2xl:h-full object-contain"
        />
        <p className="pt-4 font-[sans] font-medium justify-self-center">
          {job}
        </p>
      </article>
    </li>
  );
}

function JobList() {
  return (
    <>
      <ul className="flex gap-4 items-center">
        {jobs.map((job) => (
          <Job jobItem={job} key={job.id} />
        ))}
      </ul>
    </>
  );
}

export default JobList;

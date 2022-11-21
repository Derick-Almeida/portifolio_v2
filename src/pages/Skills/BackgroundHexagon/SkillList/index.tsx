interface ISkillListProps {
  techList: string[];
}

const SkillList = ({ techList }: ISkillListProps) => {
  return (
    <ul style={{ transition: "1s" }}>
      {techList.map((tech) => (
        <li key={tech}>{tech}</li>
      ))}
    </ul>
  );
};

export default SkillList;

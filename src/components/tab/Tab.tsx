export const Tab = ({ title }: { title: string }) => {
  return (
    <li>
      <a href={title.toLowerCase()}>{title}</a>
    </li>
  );
};

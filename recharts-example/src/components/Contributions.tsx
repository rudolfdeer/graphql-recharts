import { ContributionsCollection } from '../interface';

type ContributionsProps = {
  collection: ContributionsCollection;
};

export default function Contributions(props: ContributionsProps) {
  const { collection } = props;

  return <div className="contributions">{collection.__typename}</div>;
}

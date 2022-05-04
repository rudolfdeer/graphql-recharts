import { ContributionsCollection } from '../interface';

type ContributionsProps = {
  collection: ContributionsCollection;
};

export default function Contributions({ collection }: ContributionsProps) {
  return <div className="contributions">{collection.__typename}</div>;
}

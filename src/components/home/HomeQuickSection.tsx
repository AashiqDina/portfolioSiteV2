import { useEffect, useState } from 'react';
import { homePageData } from '../../types';
import './HomeQuickSection.css';

const PagesData: homePageData[] = [
  {
    color: '#120F17',
    title: 'Projects',
    description: 'Personal and Academic',
  },
  {
    color: '#120F17',
    title: 'Projects',
    description: 'Personal and Academic',
  },
  {
    color: '#120F17',
    title: 'Projects',
    description: 'Personal and Academic',
  },
  {
    color: '#120F17',
    title: 'Projects',
    description: 'Personal and Academic',
  },
  {
    color: '#120F17',
    title: 'Projects',
    description: 'Personal and Academic',
  },
  {
    color: '#120F17',
    title: 'Projects',
    description: 'Personal and Academic',
  },
];

function formatData(data: homePageData[]): homePageData[][] {
  const formattedData: homePageData[][] = [];

  for (let i = 0; i < data.length; i += 3) {
    formattedData.push(data.slice(i, i + 3));
  }

  return formattedData;
}

export default function HomeQuickSections() {
  const [data, setData] = useState<homePageData[][]>([]);

  useEffect(() => {
    const formattedData = formatData(PagesData);
    setData(formattedData);
  }, []);

  return (
    <div className="HomeQuickSectionsContainer">
      {data.map((arr, index) => {
        // grid
        return (
          <div className={index % 2 ? `HomeQuickSectionLayoutOne` : `HomeQuickSectionLayoutTwo`}>
            {arr.map((data, childIndex) => {
              return <QuickSectionBox data={data} parentIndex={index} childIndex={childIndex} />;
            })}
          </div>
        );
      })}
    </div>
  );
}

type QuickSectionBoxProps = {
  data: homePageData;
  parentIndex: number;
  childIndex: number;
};

function QuickSectionBox({ data, parentIndex, childIndex }: QuickSectionBoxProps) {
  const type = parentIndex % 2 === 0 ? 1 : 2;
  return <div className={`HomeQuickSectionBox-child${childIndex + 1}-type${type}`}></div>;
}

export const ALTERNATIVE = [
  'A', 'B', 'C', 'D'
];

export interface Alternative {
  id: number;
  label: string;
};

export interface Question {
  type: 'dragdrop' | 'objective';
  content: string;
  image?: string;
  alternatives: Alternative[];
  correctId: number;
};

import parse from 'html-react-parser';

export default function parseHead(head) {
  return parse(head)
}

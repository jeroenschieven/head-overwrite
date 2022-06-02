import parse from 'html-react-parser'

export default function SeoHead({ head }) {
  return (
    <>{parse(head)}</>
  )
}

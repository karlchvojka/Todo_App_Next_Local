type Props = {
  title: string;
}

export default function TestComp({ title }: Props) {
  return (
    <p>{ title }</p>
  )
}

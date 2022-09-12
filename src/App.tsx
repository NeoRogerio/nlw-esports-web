interface ButtonProps {
  title: string;
}

export function Button(props: ButtonProps) {
  return (
    <button>
      {props.title}
    </button>
  )
}

export function App() {
  return (
    <h1>Hellow NLW</h1>
  )
}

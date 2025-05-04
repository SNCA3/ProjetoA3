const Container = ({class_property, children}) => {
  return (
    <div className={`lg:container mx-auto w-full h-auto ${class_property}`}>
        {children}
    </div>
  )
}

export default Container
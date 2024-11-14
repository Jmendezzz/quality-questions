
function Section({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <section className="py-10 h-screen min-h-screen">
        <div className="container w-full h-full">
            {children}
        </div>
    </section>
  )
}

export default Section
import { useFieldArray, useForm } from 'react-hook-form';
import { z } from "zod";
const schema = z.array(z.object({
  userName:z.string().min(1,{message:"Required"}),
  password: z.string().min(1,{message:"Required"}),
}))

type TypeSchema = z.infer<typeof schema>

const App = () => {
  const { register, control, handleSubmit} = useForm({
    defaultValues: {
      test: [{ firstName: "Bill", lastName: "Luo" }]
    }
  });
  const {
    fields,
    append,
    remove
  } = useFieldArray({
    control,
    name: "test"
  });

  const onSubmit = (data:TypeSchema) => {
    console.log(data)
  }

  return (
    <>
   <form onSubmit={handleSubmit(onSubmit as never)}>
      <h1>Field Array </h1>
      <p>The following demo allow you to delete, append, prepend items</p>
        {fields.map((item, index) => {
          return (
            <div>
              <div key={item.id}>
              <input className='border-2 border-error'
                {...register(`test.${index}.firstName`, { required: true })}
              />
              <button type="button" onClick={() => remove(index)}>
                Delete
              </button>
            </div>
            </div>
          );
        })}
      <section>
        <button
          type="button"
          onClick={() => {
            append({ firstName: "", lastName: "appendLuo" });
          }}
        >
          append
        </button>
      </section>

      <input type="submit" />
    </form>
 </>
  )
}

export default App;
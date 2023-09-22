function InputOutputFields() {
  return (
    <div className="flex w-full justify-center mb-[100px]">
      <ul className="space-y-2 max-md:w-3/4 md:w-2/3 m-5 mt-10">
        <div className="border-2 border-gray-300 w-full p-3 rounded-xl shadow-lg">
          <p className="userInput">Hallo wie geht es dir</p>
        </div>
        <div className="border-2 border-gray-300 w-full p-3 rounded-xl shadow-lg">
          <p className="aiOutput">Hallo mir geht es gut und dir ?</p>
        </div>
      </ul>
    </div>
  );
}

export default InputOutputFields;

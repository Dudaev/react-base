import React from "react";
import MyInput from "./UI/MyInput/MyInput";
import MySelect from "./UI/MySelect/MySelect";

function PostFilter({ filter, setFilter }) {
  return (
    <div>
      <MyInput
        placeholder="Поиск"
        type="text"
        value={filter.query}
        onChange={(event) =>
          setFilter({ ...filter, query: event.target.value })
        }
      />
      <MySelect
        value={filter.sort}
        onChange={(event) => setFilter({ ...filter, sort: event.target.value })}
        defaultValue={"Сортировка"}
        options={[
          { name: "По описанию", value: "body" },
          { name: "По названию", value: "title" },
        ]}
      />
    </div>
  );
}

export default PostFilter;

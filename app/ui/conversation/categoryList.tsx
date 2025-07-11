import React, { useEffect, useState } from "react";
import { Avatar, List, message } from "antd";
import VirtualList from "rc-virtual-list";
import { Link } from "react-router";

interface UserItem {
  email: string;
  gender: string;
  name: string;
  avatar: string;
}

interface ConversationItem {
  category_id: string;
  conversation_id: string;
  personas: [
    {
      persona_id: number;
      profile_minors: [string];
    }
  ];
}

const CONTAINER_HEIGHT = 400;
const PAGE_SIZE = 20;
const category = "TL일,직장";
const CategoryList: React.FC = () => {
  const [data, setData] = useState<ConversationItem[]>([]);
  const [page, setPage] = useState(1);

  const appendData = (showMessage = true) => {
    const dataUrl = `http://localhost:5000/api/conversation?category_id=${category}&index=${page}`;
    fetch(dataUrl)
      .then((res) => res.json())
      .then((body) => {
        const results = Array.isArray(body["items"]) ? body["items"] : [];
        setData(data.concat(results));
        setPage(page + 1);
        showMessage && message.success(`${results.length} more items loaded!`);
      });
  };

  useEffect(() => {
    appendData(false);
  }, []);

  const onScroll = (e: React.UIEvent<HTMLElement, UIEvent>) => {
    // Refer to: https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollHeight#problems_and_solutions
    if (
      Math.abs(
        e.currentTarget.scrollHeight -
          e.currentTarget.scrollTop -
          CONTAINER_HEIGHT
      ) <= 1
    ) {
      appendData();
    }
  };

  return (
    <List>
      <VirtualList
        data={data}
        height={CONTAINER_HEIGHT}
        itemHeight={47}
        itemKey="conversation_id"
        onScroll={onScroll}
      >
        {(item: ConversationItem) => (
          <List.Item key={item.conversation_id}>
            <List.Item.Meta
              title={<a>{item.conversation_id}</a>}
              description={
                <>
                  <div>
                    {`페르소나 1 : ${item.personas[0].profile_minors.join(
                      ", "
                    )}`}
                  </div>
                  <div>
                    {`페르소나 2 : ${item.personas[1].profile_minors.join(
                      ", "
                    )}`}
                  </div>
                </>
              }
            />
            <div>
              <Link to={`/inspect/${item.conversation_id}`}>Link To Chart</Link>
            </div>
          </List.Item>
        )}
      </VirtualList>
    </List>
  );
};

export default CategoryList;

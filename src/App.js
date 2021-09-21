import React,{useState} from 'react';
import './App.css';
import MessageItem from './Components/MessageItem';

function App() {

  const [messages,setMessages] = useState([  
  {
    id: 'chat-5-1090',
    sur: { name: 'Ольга' },
    type: 'response',
    time: '10:10',
    text: 'Привет, Виктор. Как дела? Как идет работа над проектом?'
  }, {
    id: 'chat-5-1091',
    sur: { name: 'Виктор' },
    type: 'message',
    time: '10:12',
    text: 'Привет. Давай сегодня созвонимся. Проект практически готов, и у меня есть что показать.'
  }, {
    id: 'chat-5-1092',
    sur: { name: 'Ольга' },
    type: 'response',
    time: '10:14',
    text: 'Не уверена что сегодня получится. Не все еще в офисе. Давай уточню через час. Возникли ли какие-либо проблемы на последней стадии проекта?'
  }, {
    id: 'chat-5-1093',
    sur: { name: 'Виктор' },
    type: 'message',
    time: '10:20',
    text: 'Нет, все прошло гладко. Очень хочу показать всё команде.'
  }, {
    id: 'chat-5-1094',
    sur: { name: 'Виктор' },
    type: 'typing',
    time: '10:31'}
  ]);

  return (
    <div className="App">
        <div className="clearfix container">
          <div className="chat">
            <div className="chat-history">
              <MessageItem messages={messages} />
            </div>
          </div>  
        </div>
    </div>
  );
}

export default App;

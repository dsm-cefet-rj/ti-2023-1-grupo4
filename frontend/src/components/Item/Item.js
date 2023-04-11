import "./item.scss";
import "../../styles/modal.scss";
import { itemSelecionadoAtom } from "../../states/cardapio";
import { useRecoilState } from "recoil";


export default function ItemBox(props) {
  
  const [_, setItem] = useRecoilState(itemSelecionadoAtom);

  return (
    <div className={props.className}>
      <div className="comboBox" id={props.id}>
        <ul>
          <li>
            <h1>{props.tipo}</h1>
            {props.list.map((ev, i) =>
              ev.tipo === "combo" ? (
                <Combo
                  nome={ev.nome}
                  preco={ev.preco}
                  itens={ev.itens}
                  onClick = {() => setItem({index:i, tipo:props.id})}
                />
              ) : (
                <Item
                  nome={ev.nome}
                  preco={ev.preco}
                  descricao={ev.descricao}
                  onClick = {() => setItem({index:i, tipo:props.id})}
                />
              )
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}

function Item(props) {

  return (
    <div className="comboItensBox" onClick={props.onClick}>
      <ul>
        <li>
          <a>
            <h2>{props.nome}</h2>
            <p className="item-text-content">{props.descricao}</p>
            <p className="item-text-content">{props.preco}</p>
          </a>
        </li>
      </ul>
    </div>
  );
}

function Combo(props) {

  return (
    <div className="comboItensBox" onClick={props.onClick}>
      <ul>
        <li>
          <a>
            <h2>{props.nome}</h2>
            {props.itens.map((ev) => {
              return <p className="item-text-content">{ev}</p>;
            })}
            <p className="item-text-content">{props.preco}</p>
          </a>
        </li>
      </ul>
    </div>
  );
}

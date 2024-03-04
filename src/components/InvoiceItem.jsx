import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { BiTrash } from 'react-icons/bi';
import { useProductListData } from '../redux/hooks';
import EditableField from './EditableField';

const ItemRow = (props) => {
  const onDelEvent = () => {
    props.onDelEvent(props.item);
  };

  const [productPrice, setProductPrice] = useState(props.item.itemPrice);
  const { productList, getOneProduct } = useProductListData();
  const product = props.item?.itemId ? getOneProduct(props.item.itemId) : null;

  useEffect(() => {
    setProductPrice(product?.price)
  }, [props.item.itemId, product]);


  return (
    <tr>
      <td style={{ width: '100%' }}>
        <EditableField
          onItemizedItemEdit={(evt) => props.onItemizedItemEdit(evt, props.item.itemId)}
          cellData={{
            type: 'select',
            name: 'itemId',
            placeholder: 'Select an Item',
            value: props.item.itemId,
            id: props.item.itemId,
          }}
          items={[
            { value: '', label: 'Select an Item' },
            ...productList.map((product) => ({
              key: product.id,
              value: product.id,
              label: product.productName,
            })),
          ]}
        />
        <EditableField
          onItemizedItemEdit={(evt) => props.onItemizedItemEdit(evt, props.item.itemId)}
          cellData={{
            type: 'text',
            name: 'itemDescription',
            placeholder: 'Item description',
            value: props.item.itemDescription,
            id: props.item.itemId,
          }}
        />
      </td>
      <td style={{ minWidth: '70px' }}>
        <EditableField
          onItemizedItemEdit={(evt) => props.onItemizedItemEdit(evt, props.item.itemId)}
          cellData={{
            type: 'number',
            name: 'itemQuantity',
            min: 1,
            step: '1',
            value: props.item.itemQuantity,
            id: props.item.itemId,
          }}
        />
      </td>
      <td style={{ minWidth: '130px' }}>
        <EditableField
          onItemizedItemEdit={(evt) => props.onItemizedItemEdit(evt, props.item.itemId)}
          cellData={{
            leading: props.currency,
            type: 'text',
            name: 'itemPrice',
            min: 1,
            step: '0.01',
            presicion: 2,
            textAlign: 'text-end',
            value: productPrice,
            id: props.item.itemId,
            readOnly: true,
          }}
        />
      </td>
      <td className="text-center" style={{ minWidth: '50px' }}>
        <BiTrash
          onClick={onDelEvent}
          style={{ height: '33px', width: '33px', padding: '7.5px' }}
          className="text-white mt-1 btn btn-danger"
        />
      </td>
    </tr>
  );
};

const InvoiceItem = (props) => {
  const { onItemizedItemEdit, currency, onRowDel, items, onRowAdd } = props;

  const itemTable = items?.map((item) => (
    <ItemRow
      key={item.id}
      item={item}
      onDelEvent={onRowDel}
      onItemizedItemEdit={onItemizedItemEdit}
      currency={currency}
    />
  ));

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>ITEM</th>
            <th>QTY</th>
            <th>PRICE/RATE</th>
            <th className="text-center">ACTION</th>
          </tr>
        </thead>
        <tbody>{itemTable}</tbody>
      </Table>
      <Button className="fw-bold" onClick={onRowAdd}>
        Add Item
      </Button>
    </div>
  );
};

export default InvoiceItem;

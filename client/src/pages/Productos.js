import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Modal, Button, Form, Input, Card, Upload, Popconfirm, message } from "antd";
import axios from "axios";
import { UploadOutlined, DeleteOutlined } from '@ant-design/icons';
import "../styles/Productos.css";

const Productos = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [productos, setProductos] = useState([]);
  const [imageFile, setImageFile] = useState(null);

  useEffect(() => {
    // Verificar si el usuario ha iniciado sesión
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
    // Obtener la lista de productos al cargar el componente
    fetchProductos();
  }, []);

  // Función para obtener la lista de productos
  const fetchProductos = async () => {
    try {
      const response = await axios.get("/api/productos");
      setProductos(response.data.data);
    } catch (error) {
      console.error("Error al obtener productos:", error);
    }
  };

  // Función para manejar la presentación del modal de agregar producto
  const handleAddProduct = () => {
    setShowModal(true);
  };

  // Función para manejar la acción de agregar producto
  const handleAddProductoSubmit = async (values) => {
    try {
      const formData = new FormData();
      formData.append("productName", values.productName);
      formData.append("productDescription", values.productDescription);
      formData.append("productImage", imageFile);

      // Lógica para agregar el producto con imagen utilizando Axios
      await axios.post("/api/productos", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      // Actualizar la lista de productos después de agregar uno nuevo
      fetchProductos();
      setShowModal(false);
    } catch (error) {
      console.error("Error al agregar producto:", error);
    }
  };

  // Función para manejar el cambio de archivo de imagen
  const handleImageChange = (file) => {
    setImageFile(file);
    return false; // Necesario para evitar la carga automática del archivo
  };

  // Función para eliminar un producto
  const handleDeleteProduct = async (productId) => {
    try {
      await axios.delete(`/api/productos/${productId}`);
      message.success('Producto eliminado correctamente');
      fetchProductos();
    } catch (error) {
      console.error('Error al eliminar el producto:', error);
      message.error('Error al eliminar el producto');
    }
  };

  return (
    <div style={{ marginTop: "67px" }}>
      <Navbar />

      {/* Agregar producto: mostrar solo si el usuario está logueado */}
      {isLoggedIn && (
        <div className="add-product-button">
          <Button type="primary" onClick={handleAddProduct}>
            Agregar Producto
          </Button>
        </div>
      )}

      {/* Lista de productos */}
      <div className="product-grid">
        {productos.map((product) => (
          <Card
            key={product._id}
            className="product-card"
            cover={<img src={`/api/productos/image/${product._id}`} alt={product.productName} />}
            actions={[
              isLoggedIn && (
                <Popconfirm
                  title="¿Está seguro de eliminar este producto?"
                  onConfirm={() => handleDeleteProduct(product._id)}
                  okText="Sí"
                  cancelText="No"
                >
                  <Button type="danger" icon={<DeleteOutlined />} />
                </Popconfirm>
              ),
              <a href="https://wa.me/+56988249970" target="_blank" rel="noopener noreferrer">
                <Button type="primary">Comprar</Button>
              </a>
            ]}
          >
            <div className="product-info">
              <h3>{product.productName}</h3>
              <p>{product.productDescription}</p>
            </div>
          </Card>
        ))}
      </div>

      {/* Modal para agregar producto */}
      <Modal
        title="Agregar Producto"
        visible={showModal}
        onCancel={() => setShowModal(false)}
        footer={null}
      >
        <Form onFinish={handleAddProductoSubmit}>
          <Form.Item
            name="productName"
            label="Nombre del Producto"
            rules={[{ required: true, message: "Por favor ingresa el nombre del producto" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="productDescription"
            label="Descripción del Producto"
            rules={[{ required: true, message: "Por favor ingresa la descripción del producto" }]}
          >
            <Input.TextArea />
          </Form.Item>
          <Form.Item
            name="productImage"
            label="Imagen del Producto"
            rules={[{ required: true, message: "Por favor selecciona una imagen" }]}
          >
            <Upload
              name="productImage"
              listType="picture"
              beforeUpload={handleImageChange}
              showUploadList={false} // Evita mostrar la lista de subida del archivo
            >
              <Button icon={<UploadOutlined />}>Seleccionar Archivo</Button>
            </Upload>
          </Form.Item>

          <Button type="primary" htmlType="submit">
            Agregar
          </Button>
        </Form>
      </Modal>

      <Footer />
    </div>
  );
};

export default Productos;

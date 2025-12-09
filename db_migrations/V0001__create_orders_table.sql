CREATE TABLE IF NOT EXISTS orders (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    email VARCHAR(255),
    plan_id VARCHAR(50) NOT NULL,
    plan_name VARCHAR(100) NOT NULL,
    address TEXT NOT NULL,
    status VARCHAR(50) DEFAULT 'new',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_orders_status ON orders(status);
CREATE INDEX idx_orders_created_at ON orders(created_at);

COMMENT ON TABLE orders IS 'Заявки на подключение тарифных планов';
COMMENT ON COLUMN orders.id IS 'Уникальный идентификатор заявки';
COMMENT ON COLUMN orders.name IS 'Имя клиента';
COMMENT ON COLUMN orders.phone IS 'Номер телефона клиента';
COMMENT ON COLUMN orders.email IS 'Email клиента (необязательно)';
COMMENT ON COLUMN orders.plan_id IS 'ID выбранного тарифа (basic/standard/premium)';
COMMENT ON COLUMN orders.plan_name IS 'Название тарифа';
COMMENT ON COLUMN orders.address IS 'Адрес доставки SIM-карты';
COMMENT ON COLUMN orders.status IS 'Статус заявки (new/processing/completed/cancelled)';
COMMENT ON COLUMN orders.created_at IS 'Дата и время создания заявки';
COMMENT ON COLUMN orders.updated_at IS 'Дата и время последнего обновления';